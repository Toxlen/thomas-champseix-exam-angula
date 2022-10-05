import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EvaluationFromForm } from 'src/app/components/form-evaluation/form-evaluation.component';
import { RestaurantFromForm } from 'src/app/components/form-restaurant/form-restaurant.component';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {

  restaurant!: Restaurant;

  constructor(private _activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( (params: Params) => {
      this.restaurantService.getRestaurantById(parseInt(params['id'])).subscribe({
        next: restaurant => {this.restaurant = restaurant}
      });
    })
  }

  evaluationFromForm(evaluationFromForm: EvaluationFromForm): void {
    if (this.restaurant) {
      this.restaurantService.addCommentaireOnRestaurant(this.restaurant.id, evaluationFromForm).subscribe({
        next: evaluation => {this.restaurant?.evaluations.push(evaluation)}
      });
    } else {
      console.log("How is this possible ??");
    }
  }

  modifRestaurant(restaurantModifie: RestaurantFromForm): void {
    if (this.restaurant) {
      this.restaurantService.modifRestaurant(this.restaurant.id, restaurantModifie).subscribe({
        next: restaurant => {
          this.restaurant.nom = restaurant.nom;
          this.restaurant.adresse = restaurant.adresse;
        }
      })
    } else {
      console.log("How is this possible ??");
    }
  }

  supprimerEvaluation(id: number): void {
    this.restaurantService.deleteEvaluation(this.restaurant.id, id).subscribe({})
    // je n'ai pas trouver comment enlever un élément de la liste facilement mais ça marche !
  }
}
