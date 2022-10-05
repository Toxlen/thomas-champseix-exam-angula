import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evaluation } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-table-evaluation',
  templateUrl: './table-evaluation.component.html',
  styleUrls: ['./table-evaluation.component.css']
})
export class TableEvaluationComponent implements OnInit {

  @Input()
  evaluations: Evaluation[] = [];

  @Output()
  supprimerEvaluation: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  suppr(id: number): void {
    this.supprimerEvaluation.emit(id)
  }

}
