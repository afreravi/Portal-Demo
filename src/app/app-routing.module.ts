import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GirlsProfileComponent } from './components/girls-profile/girls-profile.component';
import { BoysProfileComponent } from './components/boys-profile/boys-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: AppHomeComponent },
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'Fprofile' , component: GirlsProfileComponent},
  {path: 'Mprofile' , component: BoysProfileComponent},
  {path: 'landing' , component: LandingPageComponent},
  {path: 'admin' , component: AdminDashboardComponent},
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
  ], 
  exports:[RouterModule]
})
export class AppRoutingModule { }
