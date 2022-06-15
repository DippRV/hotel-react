import {Router} from 'express'
import HotelRoomController from '../controllers/hotel_room.controller'

export const HotelRoomRouter = Router()

HotelRoomRouter.get('/hotel-rooms', HotelRoomController.getHotelRooms)