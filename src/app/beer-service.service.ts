import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
@Injectable({

  providedIn: 'root';
}

)

@Injectable({providedIn : 'root'})
export class BeerServiceService {

  constructor() { }

  getBeerList(){
    return beersData;
  }

}