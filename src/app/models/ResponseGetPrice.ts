
export interface ResponseGetPrice {

  name: string;
  model: string;
  count :number;
//    цена по прайсу Укр
  priceDefaultUkr:number;
//    ощбая стоисоть Укр
  priceGlobalUkr:number;
//    прибыль гривна
  profitUkr:number;
//     цена Укр
  priceUkr:number;
//    рентабельность Украина
  profitabilityUkr:number;
//    цена по прайсу Usa
  priceDefaultUsa:number;
//    ощбая стоисоть Usa
  priceGlobalUsa:number;
//    прибыль Usa
  profitUsa:number;
//     цена Usa
  priceUsa:number;
//    рентабельность Usa
  profitabilityUsa:number;
}
