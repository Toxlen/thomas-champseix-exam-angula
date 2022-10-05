import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.css']
})
export class FormRestaurantComponent implements OnInit {

  @Input()
  nomInput: string = "";
  @Input()
  adresseInput: string = "";

  @Output()
  outRestaurant: EventEmitter<RestaurantFromForm> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    if(form.valid) {
      console.log("valid youhou")
      this.outRestaurant.emit({
        nom: this.nomInput,
        adresse: this.adresseInput
      })
    }
  }
}

export interface RestaurantFromForm {
  nom: string;
  adresse: string;
}
