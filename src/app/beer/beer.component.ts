import { Component, Input, OnInit } from '@angular/core';
import { BeerServiceService } from '../beer-service.service';
import { Beer } from '../model/model';
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  @Input()
  beer: Beer;

  constructor(private beerService: BeerServiceService) {}

  ngOnInit() {}

  onDelete() {
    this.beerService.deleteBeer(this.beer);
  }
}
