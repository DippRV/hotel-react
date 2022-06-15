import {Request, Response} from 'express'
import {pool} from '../config/db'

class BookingController {
    async getBookings(req: Request, res: Response) {
        const bookings = await pool.query("SELECT * FROM booking");
        res.json(bookings.rows);
    }
}

export default new BookingController();