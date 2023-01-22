import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDateModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenDateModal:(state) =>{
        state.isDateModalOpen = true
    },
    onCloseDateModal: (state) =>{
      console.log(state.isDateModalOpen)
        state.isDateModalOpen = false
        
    }
  },
})


export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions