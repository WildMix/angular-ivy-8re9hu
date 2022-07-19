import { Component, OnInit } from '@angular/core';
import { Beer } from '../model/model';
import { beersData } from '../data/beer-list';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = beersData;
  constructor() {}

  ngOnInit() {}
}
