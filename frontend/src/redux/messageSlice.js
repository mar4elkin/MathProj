import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  type: ''
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessageSucess: (state, action) => {
      state.message = action.payload
      state.type = 'success'
    },
    setMessageWarning: (state, action) => {
      state.message = action.payload
      state.type = 'warning'
    },
    setMessageDanger: (state, action) => {
      state.message = action.payload
      state.type = 'danger'
    },
    clear: (state) => {
      state.message = ''
      state.type = ''
    }
  },
})

export const { setMessageSucess, setMessageWarning, setMessageDanger, clear } = messageSlice.actions
export default messageSlice.reducer