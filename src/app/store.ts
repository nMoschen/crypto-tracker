import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/favoritesSlice';
import coinsReducer from '../features/coinsList/coinsSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    coins: coinsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
