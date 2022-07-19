export type BeerStyle =
  | 'Ale'
  | 'Gose'
  | 'Ipa'
  | 'Lager'
  | 'Pilsner'
  | 'Heat'
  | 'Saison';

export interface beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
}
