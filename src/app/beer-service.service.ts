import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({ providedIn: 'root' })
export class BeerServiceService {
  private beers = beersData;

  constructor() {}

  getBeerList() {
    return beersData;
  }

  deleteBeer(beer: Beer) {
    this.beers = this.beers.filter((item) => beer.id !== item.id);
  }
}
