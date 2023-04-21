import { createSlice } from '@reduxjs/toolkit'

export const gamesSlice = createSlice({
  name: 'games',
  initialState: [],
  reducers: {
    setGames: (state, action) => {
      if(action.payload.length){
        state = Object.assign(state, action.payload)
      }else{
        state = state.splice(0, state.length)
      }
    },
  },
});

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;