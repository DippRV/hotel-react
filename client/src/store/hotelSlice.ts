import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './index'

interface HotelState {

}

const initialState: HotelState = {}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {

    }
})


export const {} = hotelSlice.actions;

export default hotelSlice.reducer;