import express, {Request, Response} from 'express'
import {HotelRouter} from "./routes/hotel.routes";
import {HotelRoomRouter} from "./routes/hotel_room.routes";
import {ClientRouter} from "./routes/client.routes";
import {BookingRouter} from "./routes/booking.routes"

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/api', HotelRouter);
app.use('/api', HotelRoomRouter);
app.use('/api', ClientRouter);
app.use('/api', BookingRouter);



app.listen(PORT, () => {
    console.log('Application listening at http://localhost:3000');
});

