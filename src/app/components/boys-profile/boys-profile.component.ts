import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatasourceService } from "src/app/services/datasource.service";
import { QUIZ } from "src/db-data"
import { quizList } from "src/app/models/constants"
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { RetakeExamComponent } from "../retake-exam/retake-exam.component"

@Component({
  selector: 'app-boys-profile',
  templateUrl: './boys-profile.component.html',
  styleUrls: ['./boys-profile.component.css']
})
export class BoysProfileComponent implements OnInit {
  isEnrolled:Boolean = true;
  isStart:boolean = false;
  enrolledCourse:any;
  isProfile:boolean = true;
  startCourse: boolean = false;
  courseComplete: boolean = false;
  courseAssessment:boolean = false
  testPage:boolean = false;
  submitEnabled:boolean = false;
  isAttempt: Array<string> = [];
  selectedAns: Array<string> = [];
  correctAns: Array<string> = ["customRadio1", "customRadio5","customRadio9","customRadio13","customRadio17", "customRadio21","customRadio25","customRadio29","customRadio33","customRadio37"];
  isPassed: boolean;
  isFirstVideo:boolean = true;
  isSecondVideo:boolean = false;
  certificatePage: boolean = false;
  quiz:quizList[] =[];
  quizData = QUIZ;

  constructor(
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private datasource: DatasourceService,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.quiz.push(
      {
        "id": "list-q1",
        "questionNo": "Question 1",
        "questionTitle": "What is CSS stands for...",
        "questionAns": [
          {
            "option1": "Computer Styled Sections",
            "option2": "Cascading Style Sheets",
            "option3": "Crazy Solid Shapes",
            "option4": "None of the above",
            "correctAns": "Cascading Style Sheets"
          }
        ]
      },
      {
        "id": "list-q2",
        "questionNo": "Question 2",
        "questionTitle": "Fake emails, text messages and websites created to look like they’re from authentic companies are:",
        "questionAns": [
          {
            "option1": "Phishing",
            "option2": "Spyware",
            "option3": "Pharming",
            "option4": "None of the above",
            "correctAns": "Phishing"
          }
        ]
      },
      {
        "id": "list-q3",
        "questionNo": "Question 3",
        "questionTitle": "What is the definition of Clickjacking?",
        "questionAns": [
          {
            "option1": "Clicking all over the page",
            "option2": "Someone stealing your clicker",
            "option3": "Catchy headlines that try to get you to paste a link in your browser",
            "option4": "None of the above",
            "correctAns": "Catchy headlines that try to get you to paste a link in your browser"
          }
        ]
      }
    );
    console.log(this.quiz)

    console.log(this.isAttempt)

    
  }

  
  onEnroll(e){
    this.isEnrolled = false;
    this.enrolledCourse = e.target.name;
    this._snackBar.open('Enrolled for selected course', '', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});;setTimeout(() => {
      this.isStart = true;
    }, 2000);

    e.preventDefault();
  }

  onStart(e){
    this.isProfile = false;
    this.startCourse = true;
    e.preventDefault();
  }

  onCourseComplete(){
    this.isProfile = false;
    this.courseComplete = true;
    this.courseAssessment = false;
  }

  onStartTest(){
    this.isProfile = false;
    this.startCourse = false;
    this.courseAssessment = true;
  }
  onNextVideo(){
    this.isFirstVideo = !this.isFirstVideo
    this.isSecondVideo = true;
  }
  onTest(){
    this.testPage = true;
    this.isProfile = false;
    this.startCourse = false;
    this.courseAssessment = false;
  }
  enableNextBtn(e){
    if(e.target.checked){
      this.isAttempt.push(e.target.name)
      console.log(e.target.name)
      this.selectedAns.push(e.target.id)
      console.log(e.target.id)
    }
  }
  onSubmit(f:NgForm){
    this.isPassed = (this.selectedAns.length == this.correctAns.length) && this.selectedAns.every((element, index) => {
      return element === this.correctAns[index]; 
  });
      if(this.isPassed){
        this._snackBar.open('Congratulation! You passed the Assessment', '', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});;setTimeout(() => {
          this.testPage = false;
          this.certificatePage = true;
        }, 3000);
      } else {
        const dialogRef = this.dialog.open(RetakeExamComponent, {
          panelClass: 'confirm-box'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        }); 
        setTimeout(() => {
          this.certificatePage =false;
          this.testPage = false;
          this.courseAssessment = false;
          this.startCourse = true;
          this.isAttempt = [];
          this.startCourse = false;
          this.isProfile = true;
          this.isStart = true;
        }, 3000);
  
      }
  }
  
  onBackHome(){
    this.certificatePage =false;
    this.testPage = false;
    this.courseAssessment = false;
    this.isAttempt = [];
    this.startCourse = false;
    this.isProfile = true;
  }
}
