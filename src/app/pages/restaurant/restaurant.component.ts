import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantFromForm } from 'src/app/components/form-restaurant/form-restaurant.component';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => {this.restaurants = restaurants}
    })
  }

  retaurantFromForm(restaurant: RestaurantFromForm): void {
    this.restaurantService.addRestaurant(restaurant).subscribe({
      next: restaurant => {this.restaurants.push(restaurant)},
    });
  }

  gotoDetail(id: number): void {
    this.router.navigate([`/restaurants/${id}`])
  }
}
