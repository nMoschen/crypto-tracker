import { Currencies } from "../constants";

export class CoinRate {
  rate: number;
  currency: Currencies;
  date: Date;

  constructor(data: {
    rate: number;
    currency: Currencies;
    date: Date;
  }) {
    this.rate = data.rate;
    this.currency = data.currency;
    this.date = data.date;
  }
}
