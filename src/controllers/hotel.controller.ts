import {Request, Response} from 'express'
import {pool} from '../config/db'

class HotelController {
    async getHotels (req: Request, res: Response) {
        const hotels = await pool.query('SELECT * FROM hotel');
        res.json(hotels.rows)
    }
}

export default new HotelController();
