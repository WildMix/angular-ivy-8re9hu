import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BeerListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
