import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
this.questions=this.questionService.questions.slice();
  }

  onSeeResults(){
    let totalPoint:number=0;

    for (let index = 0; index < this.questions.length; index++) {
      const q = this.questions[index];
    let b:boolean=false;
      for (let index2 = 0; index2 < q.answers.length; index2++) {
        const a = q.answers[index2];
        if(a.correct && a.answer==q.studentAnswer){
          totalPoint++;
          q.correct=2;
          b=true;
          break;
        }
        
      }

      if(!b){
q.correct=3;
      }
      if(q.studentAnswer==''){
        q.correct=1;
      }
    }

    //alert('neticen = '+totalPoint);
    this.totalPoint=totalPoint;
  }

  answerSelected(counter:number,a:string){
    this.questions[counter].studentAnswer=a;
  }


  getBackColor(c:number):string{
    let color:string='white';
    if(c==2){
      color='green';
    }else if(c==3){
      color='red';
    }
    return color;
  }

  totalPoint:number=0;
  calculatePercent(){
    let questionSize=this.questions.length;
    let totalPercent=this.totalPoint*100/questionSize;

    if(totalPercent<=50){
    return false;
    }else{
    
    return true;
    
    }
  }
}
