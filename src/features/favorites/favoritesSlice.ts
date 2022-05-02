import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    coins: [],
    status: 'idle',
  },
  reducers: {

  }
});

export default favoritesSlice.reducer;
