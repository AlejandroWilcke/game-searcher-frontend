import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/gamesSlice';
import topGamesReducer from './slices/topGamesSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    topGames: topGamesReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;