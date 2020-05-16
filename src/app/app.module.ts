import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GirlsProfileComponent } from './components/girls-profile/girls-profile.component';
import { BoysProfileComponent } from './components/boys-profile/boys-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RetakeExamComponent } from './components/retake-exam/retake-exam.component';
import { BarChartsComponent } from './components/admin-dashboard/bar-charts/bar-charts.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartsComponent } from './components/admin-dashboard/pie-charts/pie-charts.component';
import { LineChartsComponent } from './components/admin-dashboard/line-charts/line-charts.component';
import { DoughnutChartsComponent } from './components/admin-dashboard/doughnut-charts/doughnut-charts.component';
import { PieChartsGirlsComponent } from './components/admin-dashboard/pie-charts-girls/pie-charts-girls.component';
import { PieChartsSchoolsComponent } from './components/admin-dashboard/pie-charts-schools/pie-charts-schools.component';
import { TriviaComponent } from './components/trivia/trivia.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppHomeComponent,
    LoginComponent,
    RegisterComponent,
    GirlsProfileComponent,
    BoysProfileComponent,
    LandingPageComponent,
    RetakeExamComponent,
    AdminDashboardComponent,
    BarChartsComponent,
    PieChartsComponent,
    LineChartsComponent,
    DoughnutChartsComponent,
    PieChartsGirlsComponent,
    PieChartsSchoolsComponent,
    TriviaComponent
  ],
  entryComponents: [RetakeExamComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
