import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BeerListComponent, BeerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
