import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-girls-profile',
  templateUrl: './girls-profile.component.html',
  styleUrls: ['./girls-profile.component.scss'],
})
export class GirlsProfileComponent implements OnInit {
  isEnrolled:Boolean = true;
  isStart:boolean = false;
  enrolledCourse:any

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  onEnroll(e){
    this.isEnrolled = false
    
    this.enrolledCourse = e.target.name
    
    this._snackBar.open('Enrolled for selected course', '', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});;setTimeout(() => {
      this.isStart = true;
    }, 2000);

    e.preventDefault();
  }

  onStart(e){
    this.router.navigate(['Mprofile']);  
    e.preventDefault();
  }


}
