import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersDetailsService } from '../../services/users-details.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit, OnDestroy {
  private isLoggedIn:boolean;
  private getLoginSuccessSubscription: Subscription;
  
  constructor(private userDetails: UsersDetailsService) { }

  ngOnInit() {
    this.getLoginSuccessSubscription = this.userDetails.getLoginSuccess()
    .subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    console.log(this.isLoggedIn);
  }

  ngOnDestroy(){
    this.getLoginSuccessSubscription.unsubscribe
  }
}
