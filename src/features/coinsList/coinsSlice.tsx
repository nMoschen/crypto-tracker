import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Currency, Status, Statuses } from "../../shared/constants";
import { Coin, CoinRate } from "../../shared/models";

interface CoinResponse {
  asset_id: string,
  name: string,
  price_usd: number,
}

interface CoinIconResponse {
  asset_id: string,
  url: string
}

export const getCoins = createAsyncThunk(
  'coins/get',
  async (): Promise<Coin[]> => {
    const [coinsResponse, iconsResponse] = await Promise
      .all([
        fetch('data/coins-list.json'),
        fetch('data/coins-icons.json')
      ])
    const coins: CoinResponse[] = await coinsResponse.json();
    const icons: CoinIconResponse[] = await iconsResponse.json();
    const date = new Date();
    const mapped = coins.map(coin => new Coin({
      id: coin.asset_id,
      name: coin.name,
      logo: icons.find(icon => icon.asset_id === coin.asset_id)?.url || '',
      rates: [new CoinRate({ rate: coin.price_usd, currency: Currency.USD, date })]
    }));
    return new Promise((resolve) => setTimeout(() => resolve(mapped), 1000));
  }
);

const initialState: { coins: Coin[], status: Statuses } = {
  coins: [],
  status: Status.Idle
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.status = Status.Idle;
        state.coins = action.payload;
      })
      .addCase(getCoins.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export const selectCoins = (state: RootState) => state.coins;

export default coinsSlice.reducer;
