import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  isUserEmailValid: false,
  isUserAuth: false,
  backendUrl: 'http://127.0.0.1:8000/api/v1'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, token) => {
      state.token = token
    },
    login: (state) => {
      state.isUserAuth = true
    },
    logout: (state) => {
      state.token = ''
      state.isUserEmailValid = false
      state.isUserAuth = false
    }
  },
})

export const { login, register, logout } = userSlice.actions
export default userSlice.reducer