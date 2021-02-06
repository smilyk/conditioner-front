import {RequestGetPrice} from "./RequestGetPrice";
import {ResponseOffer} from "./ResponseOffer";

export interface ResponseOfferModel {
  client: string;
  price: ResponseOffer[];
}
