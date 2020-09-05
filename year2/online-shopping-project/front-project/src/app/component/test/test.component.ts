import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questions: string[] = [
    "What is angular?",

    "Versions of angular",

    "Angular by google",

    "Javascript frameworks",

    "Why we should learn angular?",

    "How to develop angular applications?",

    "Angular development environment",

    "Install Node JS for angular",

    "What is npm?",

    "Install angular cli",

    "What is cli?",

    "Create brand new angular project",

    "Run angular application",

    "Run angular application in different port address",

    "Edit angular application with IDE",

    "Install Visual Studio Code for editing angular applications",

    "Angular uses typescript instead of javascript",

    "What is typescript?",

    "What is difference between typescript and javascript?",

    "Typescript basics",

    "Create arrays in typescript",

    "Typescript is strong typed",

    "let and const in typescript",

    "Using classes in typescript",

    "Angular framework specifications",

    "Overview of project files",

    "main.ts file",

    "node_modules folder",

    "angular.json file",

    "package.json file",

    "src folder",

    "assets folder",

    "app.modules.ts file",

    "main component",

    "Create new component manually and with CLI",

    "component css, html, ts files deeper",

    "How to create angular component from class",

    "What is selector?",

    "What is templateUrl?",

    "What is styleUrls?",

    "How to import another classes to component?",

    "Working with component templates",

    "Working with component styles",

    "Databinding in Angular",

    "One way databinding (string interpolation, property binding)",

    "Event binding",

    "Two way databinding",

    "bindable properties and events",

    "Create button element and click event",

    "Install Bootstrap framework to Angular with npm",

    "Change button style to look better",

    "(input) event and cast",

    "($event) syntax "

  ];

  students: string[] = [
    "Ləman", "Zəhranur", "Fərid", "Tofiq", "Şahin", "İsmayıl"
  ];

  studentQuestions: StudentQuestion[] = [];
  constructor() { }

  ngOnInit() {


  }
  shuffleQuestions() {
    this.studentQuestions = [];
    let telebeSayi: number = this.students.length; // 6

    let umumiSualSayi: number = this.questions.length; // 44

    let verilenSualSayi: number = 0;


    let index: number = 0;

    while (verilenSualSayi < telebeSayi) {


      let studentQuestion: StudentQuestion = new StudentQuestion();

      studentQuestion.student = this.students[index];

      let rand = Math.random();// minimum 0, maksimum 0.9999999999999
      if (rand > 0.94) {
        rand = 0.94;
      }
      let a = rand * umumiSualSayi;

      a = Number.parseInt(a.toFixed(0));  //  

      let question: string = this.questions[a];
      let buVarmi: boolean = false;
      for (let index = 0; index < this.studentQuestions.length; index++) {
        const e = this.studentQuestions[index];
        if (e.question == question) {
          buVarmi = true; break;
        }

      }

      if (buVarmi) {
        console.log("continue");
        continue;

      } else {
        studentQuestion.question = question;
        verilenSualSayi++;
        index++;
      }

      this.studentQuestions.push(studentQuestion);


    }


    this.studentQuestionsOrginal = this.studentQuestions.slice();
  }

  search: string = '';
  studentQuestionsOrginal: StudentQuestion[] = [];
  searchMethod() {
    let studentQuestions: StudentQuestion[] = [];
    this.studentQuestions = this.studentQuestionsOrginal.slice();
    for (let index = 0; index < this.studentQuestions.length; index++) {
      const element = this.studentQuestions[index];
      let awesome = '';
      awesome += element.student + element.question;
      if (awesome.includes(this.search)) {
        studentQuestions.push(element);
      }

    }

    this.studentQuestions = studentQuestions;

  }
}


export class StudentQuestion {
  public student: string;
  public question: string;

}