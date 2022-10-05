import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRestaurantComponent } from './pages/details-restaurant/details-restaurant.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: 'restaurants', component: RestaurantComponent
  },
  {
    path: 'restaurants/:id', component: DetailsRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
