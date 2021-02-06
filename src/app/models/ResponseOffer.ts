import {RequestGetPrice} from "./RequestGetPrice";

export interface ResponseOffer {
  model: string;
  priceUkr: number;
  priceUsa: number;
  workPriceUkr: number;
  sumUkr: number;
  priceInternet: number;
}
