import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-table-restaurant',
  templateUrl: './table-restaurant.component.html',
  styleUrls: ['./table-restaurant.component.css']
})
export class TableRestaurantComponent implements OnInit {

  @Input()
  restaurants: Restaurant[] = [];

  @Output()
  gotoDetail: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goto(id: number): void{
    this.gotoDetail.emit(id)
  }
}
