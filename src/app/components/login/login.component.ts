import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { LOGINUSER } from '../../models/users'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDetailsService } from '../../services/users-details.service'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');
  // @Output()
  // userLogin = new EventEmitter<boolean>();

  public userLogin: boolean = false;
  

  girlLogin: LOGINUSER  = {
    username: 'neha.v',
    password: 'Neh@V2020'
  }
  boyLogin: LOGINUSER = {
    username: 'parikshit.kathale',
    password: 'April@2020'
  }
  adminLogin: LOGINUSER = {
    username: 'admin',
    password: 'admin'
  }

  constructor(private userDetails: UsersDetailsService,  private router: Router) { }

  ngOnInit() {
    // this.userLogin = this.userDetails.loginSuccess  

    this.userDetails.setLoginSuccess(this.userLogin)
    // console.log(this.userDetails.setLoginSuccess(this.userLogin));

    console.log(this.userLogin)
  }

  // loggedIn(){
  //   if(this.username.value && this.password.value){
  //     console.log(this.username.value)
  //     console.log(this.username.value)
  //   }else{
  //     alert("Please add correct details")
  //   }
  // }

  onSubmit(){
    let logUsername = this.username.value
    let logPassword = this.password.value
    switch ( logUsername && logPassword ){
      case (this.girlLogin.username && this.girlLogin.password):
      this.router.navigate(['Fprofile']);  
      this.userLogin = true;
      break;

      case (this.boyLogin.username && this.boyLogin.password):
      this.router.navigate(['Mprofile']);
      this.userLogin = true;
      break;

      case (this.adminLogin.username && this.adminLogin.password):
      this.router.navigate(['admin']);
      this.userLogin = true;
      this.userDetails.setLoginSuccess(this.userLogin)
      break;

      default:
      alert('Invalid Credentials');
    }
  }
}