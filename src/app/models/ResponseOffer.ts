import {RequestGetPrice} from "./RequestGetPrice";

export interface ResponseOffer {
  name: string;
  model: string;
  priceUkr: number;
  priceUsa: number;
  workPriceUkr: number;
  sumUkr: number;
  priceInternet: number;
}
