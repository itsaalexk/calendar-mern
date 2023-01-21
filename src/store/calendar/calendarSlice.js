import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = {
    title:"Cumple",
    notes: "Comprar tarta",
    start: new Date(),
    end: addHours(new Date(),2),
    bgColor: "#fafafa",
    user:{
      _id: "123",
  }}

const initialState = {
  events:[tempEvent],
  activeEvent: null
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    
  },
})


export const {} = calendarSlice.actions