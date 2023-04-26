import { QuizAnswer, QuizQuestion } from './quiz-question';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  formGroup: FormGroup;
  quizQuestions: QuizQuestion[];
  quizResult: string | null = null;

  constructor(private quizService: QuizService) {
    this.formGroup = new FormGroup({});
    this.quizQuestions = quizService.quizQuestions;
    for (var question of this.quizQuestions) {
      this.formGroup.setControl(
        question.id,
        new FormControl<QuizAnswer | null>(null, {
          validators: [Validators.required],
          nonNullable: true,
        })
      );
    }
  }

  get questions() {
    return this.quizQuestions;
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let answers = this.quizQuestions.map(
        (question) => this.formGroup.get(question.id)!.value
      );
      this.quizResult = this.quizService.calculateElement(answers);
    }
  }
}
