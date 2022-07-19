import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerListComponent } from '../beer-list/beer-list.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: '/list',
    component: BeerListComponent,
  },
  {
    path: '/add',
    component: BeerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RouterModule],
})
export class AppRoutingModule {}
