import { Injectable } from '@angular/core';
import { Question, Answer } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [];
  constructor() {

    let q1: Question = new Question();
    q1.question = 'ingilis dilinde nece herf var?';
    q1.id = 1;
    q1.studentAnswer = '';
    q1.answers.push(new Answer('25', false),
      new Answer('26', true), new Answer('27', false), new Answer('44', false));


      let q2: Question = new Question();
    q2.question = 'ingilis dilinde nece ses var?';
    q2.id = 2;
    q2.studentAnswer = '';
    q2.answers.push(new Answer('42', false),
      new Answer('43', false), new Answer('44', true));


      let q3: Question = new Question();
      q3.question = 'npm nedir?';
      q3.id = 3;
      q3.studentAnswer = '';
      q3.answers.push(new Answer('node package manager', true),
        new Answer('niye paket menimdir', false), new Answer('niye p azdir', false));
  
   let q4: Question = new Question();
      q4.question = 'cli nedir?';
      q4.id = 4;
      q4.studentAnswer = '';
      q4.answers.push(new Answer('npm', false),
        new Answer('com li int', true)  );
  

        


      this.questions.push(q1,q2,q3,q4);

  }
}
