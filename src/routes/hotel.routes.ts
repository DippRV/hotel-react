import {Router} from 'express'
import HotelController from '../controllers/hotel.controller'

export const HotelRouter = Router()

HotelRouter.get('/hotels', HotelController.getHotels)
