import { Component, OnInit } from '@angular/core';
import { Gender} from "../../models/constants";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

gender: Gender[]

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {

    this.gender = [
      {value: 'male', viewValue: 'Female'},
      {value: 'female', viewValue: 'Male'}
    ];
  }

  openSnackBar() {
    this._snackBar.open('User successfully added', '', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'});;
    setTimeout(() => {
      this.router.navigate(['login']);  
    }, 2000);
  }

  

  // onSubmit(f: NgForm){
  //   f.form.reset();
  // }
}
