import {Request, Response} from 'express'
import {pool} from '../config/db'

class ClientController {
    async getClients (req: Request, res: Response) {
        const clients = await pool.query('SELECT * FROM client');
        res.json(clients.rows);
    }
    async addClient (req: Request, res: Response) {
        const {full_name, age} = req.body;
        const newClient = await pool.query("INSERT INTO client (full_name, age) VALUES ($1, $2) RETURNING *", [full_name, age]);
        res.json(newClient.rows[0]);
    }

    async updateClient (req: Request, res: Response) {
        const {id, full_name, age} = req.body;
        const updatedClient = await pool.query("UPDATE client SET full_name = $1, age = $2 WHERE id = $3 RETURNING *", [full_name, age, id]);
        res.json(updatedClient.rows[0]);
    }
}

export default new ClientController();