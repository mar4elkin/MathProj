import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  isUserAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isUserAuth = true
    },
    logout: (state) => {
      state.token = ''
      state.isUserAuth = false
    }
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer