import { CoinRate } from "./CoinRate";

export class Coin {
  id: string;
  name: string;
  rates: CoinRate[];
  logo: string;

  constructor(data: { 
    id: string;
    name: string;
    rates: CoinRate[];
    logo: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.rates = data.rates;
    this.logo = data.logo;
  }
}
