import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatasourceService } from "src/app/services/datasource.service";
import { QUIZ } from "src/db-data"
import { quizList } from "src/app/models/constants"
import {MatDialog} from '@angular/material/dialog';
import { RetakeExamComponent } from "../retake-exam/retake-exam.component"
import { FormControl,FormGroup, Validators,FormArray } from '@angular/forms';
import { MatRadioChange } from '@angular/material';
import { UsersDetailsService } from '../../services/users-details.service'
@Component({
  selector: 'app-girls-profile',
  templateUrl: './girls-profile.component.html',
  styleUrls: ['./girls-profile.component.scss'],
})
export class GirlsProfileComponent implements OnInit {
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
  correctAns: Array<any>;
  rightAns:Array<string>;
  isPassed: boolean;
  isFirstVideo:boolean = true;
  isSecondVideo:boolean = false;
  checkedAns:string;
  // certificatePage: boolean = false;
  quiz:quizList[] =[];
  quizData = QUIZ;
  activedQuestion:number = 0;
  tickedAns: string;
  isLinear = false;
  formGroup : FormGroup;
  //form: FormArray;
  questions:quizList[] = this.datasource.quiz
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  finalArray:any[] = []

  constructor(
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private datasource: DatasourceService,
    public dialog: MatDialog,
    private userDetails: UsersDetailsService
     ) { }

  ngOnInit() {
    this.userDetails.setLoginSuccess(true);
  }

  form = new FormArray(this.questions.map( ()=> new FormGroup({})))
  

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

radioChange(event: MatRadioChange, data) {
  var obj = this.questions.filter(x => x.id == data.id)[0];
  if(obj.correctAns = event.value){
    this.selectedAns.push(event.value)
  }
  
  
  // console.log(this.finalArray.some(x => x.id == data.id))
  // if (!this.finalArray.some(x => x.id == data.id)) {
  //   this.finalArray.push(obj);
  // }
}
nextStep(q){
  this.activedQuestion = q + 1;
}
prevStep(q) {
  this.activedQuestion = q - 1;
}
// enableNextBtn(e){
//   if(e.target.checked){
//     this.isAttempt.push(e.target.name)
//     this.selectedAns.push(e.target.id)
//   }
// }
onSubmit(){
  this.rightAns = this.datasource.rightAns
  this.isPassed = (this.selectedAns.length == this.rightAns.length) && this.selectedAns.every((element, index) => {
    return element === this.datasource.rightAns[index]; 
});
    if(this.isPassed){
      this._snackBar.open('Congratulation! You passed the Assessment', '', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});;setTimeout(() => {
        this.testPage = false;
        this.testPage = false;
        this.courseAssessment = false;
        this.startCourse = true;
        this.isAttempt = [];
        this.startCourse = false;
        this.isProfile = true;
        this.isStart = false;
        this.isEnrolled = true;
        this.selectedAns = [];
      }, 3000);
    } else {
      const dialogRef = this.dialog.open(RetakeExamComponent, {
        panelClass: 'confirm-box'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
      }); 
      setTimeout(() => {
        // this.certificatePage =false;
        this.testPage = false;
        this.courseAssessment = false;
        this.startCourse = true;
        this.isAttempt = [];
        this.startCourse = false;
        this.isProfile = true;
        this.isStart = true;
        this.isEnrolled = false;
        this.selectedAns = [];
      }, 3000);

    }
}

onBackHome(){
  // this.certificatePage =false;
  this.testPage = false;
  this.courseAssessment = false;
  this.isAttempt = [];
  this.startCourse = false;
  this.isProfile = true;
}
}
