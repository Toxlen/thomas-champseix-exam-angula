import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evaluation } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  evaluateurInput: string = "";
  commentaireInput: string = "";
  noteInput: number = 0;

  @Output()
  newEvaluation: EventEmitter<EvaluationFromForm> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    if(form.valid) {
      this.newEvaluation.emit({
        evaluateur: this.evaluateurInput,
        commentaire: this.commentaireInput,
        note: this.noteInput
      })
    }
  }
}

export interface EvaluationFromForm {
  evaluateur: string;
  commentaire: string;
  note: number;
}
