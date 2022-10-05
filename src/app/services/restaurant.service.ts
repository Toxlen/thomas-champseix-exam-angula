import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Evaluation, Restaurant } from '../dto/restaurant.dto';
import { RestaurantFromForm } from '../components/form-restaurant/form-restaurant.component';
import { EvaluationFromForm } from '../components/form-evaluation/form-evaluation.component';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>('http://localhost:8080/restaurants');
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`http://localhost:8080/restaurants/${id}`);
  }

  modifRestaurant(id: number, restaurant: RestaurantFromForm){
    return this.httpClient.put<Restaurant>(`http://localhost:8080/restaurants/${id}`, restaurant);
  }

  addRestaurant(restaurant: RestaurantFromForm): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>('http://localhost:8080/restaurants', restaurant);
  }

  addCommentaireOnRestaurant(idRestaurant: number, evaluation: EvaluationFromForm): Observable<Evaluation> {
    return this.httpClient.post<Evaluation>(`http://localhost:8080/restaurants/${idRestaurant}/evaluations`, evaluation);
  }

  deleteEvaluation(idRestaurant: number, id: number): Observable<Evaluation> {
    return this.httpClient.delete<Evaluation>(`http://localhost:8080/restaurants/${idRestaurant}/evaluations/${id}`);
  }

}
