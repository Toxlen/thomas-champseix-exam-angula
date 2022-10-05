import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { TableRestaurantComponent } from './components/table-restaurant/table-restaurant.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormRestaurantComponent } from './components/form-restaurant/form-restaurant.component';
import { DetailsRestaurantComponent } from './pages/details-restaurant/details-restaurant.component';
import { TableEvaluationComponent } from './components/table-evaluation/table-evaluation.component';
import { FormEvaluationComponent } from './components/form-evaluation/form-evaluation.component';
import { ColorRestaurantDirective } from './directives/color-restaurant.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    TableRestaurantComponent,
    FormRestaurantComponent,
    DetailsRestaurantComponent,
    TableEvaluationComponent,
    FormEvaluationComponent,
    ColorRestaurantDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
