import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersDetailsService } from '../../services/users-details.service'
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit, OnDestroy {
  isLoggedIn:boolean = false;
  getLoginSuccessSubscription: Subscription;
  isMobileMenu: boolean;
  
  constructor(private userDetails: UsersDetailsService,
    private router: Router) { }

  ngOnInit() {
    this.getLoginSuccessSubscription = this.userDetails.getLoginSuccess()
    .subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    console.log(this.isLoggedIn)
  }

  toogleLogin(){
    if(this.isLoggedIn){
      this.router.navigate(['/home']);
      this.isLoggedIn = false
    }else{
      this.router.navigate(['/login']);

    }
    
  }

  ngOnDestroy(){
    this.getLoginSuccessSubscription.unsubscribe
  }
}
