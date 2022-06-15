import {Router} from 'express'
import BookingController from "../controllers/booking.controller"

export const BookingRouter = Router()

BookingRouter.get('/bookings', BookingController.getBookings)

