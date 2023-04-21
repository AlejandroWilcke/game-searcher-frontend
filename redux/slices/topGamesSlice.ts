import { createSlice } from '@reduxjs/toolkit'

export const topGamesSlice = createSlice({
  name: 'topGames',
  initialState: [],
  reducers: {
    setTopGames: (state, action) => {
      state = Object.assign(state, action.payload)
    },
  },
});

export const { setTopGames } = topGamesSlice.actions;

export default topGamesSlice.reducer;