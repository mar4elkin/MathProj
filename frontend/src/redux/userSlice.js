import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  isUserAuth: false,
  backendUrl: 'http://127.0.0.1:8000/api/v1',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isUserAuth = true
    },
    logout: (state) => {
      state.token = ''
      state.isUserAuth = false
    }
  },
})

export const { login, register, logout } = userSlice.actions
export default userSlice.reducer