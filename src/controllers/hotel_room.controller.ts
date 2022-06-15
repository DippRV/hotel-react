import {Request, Response} from 'express'
import {pool} from '../config/db'

class HotelRoomController {
    async getHotelRooms (req: Request, res: Response) {
        const hotel_rooms = await pool.query('SELECT * FROM "hotel_room"');
        res.json(hotel_rooms.rows)
    }
}

export default new HotelRoomController();