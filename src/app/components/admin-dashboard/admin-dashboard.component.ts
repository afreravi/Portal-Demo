import { Component, OnInit } from '@angular/core';
import { UsersDetailsService } from '../../services/users-details.service'


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userDetails: UsersDetailsService) { }

  ngOnInit() {
    this.userDetails.setLoginSuccess(true);
  }

}
