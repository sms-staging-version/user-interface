import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoadingComponent } from './components/auth-loading/auth-loading.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { SurveyCreatorComponent } from './components/survey/survey-creator/survey-creator.component';
import { SurveyListComponent } from './components/survey/survey-list/survey-list.component';

import { SurveyDataComponent } from './components/survey/survey-data/survey-data.component'; // temporary -Steph


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth-loading',
    component: AuthLoadingComponent
  },
  {

    path: 'survey',
    component: SurveyCreatorComponent
  },
  {
    path: 'surveyList',
    component: SurveyListComponent},
  {
    path: 'survey-data', // temporary path just need to see my page - Steph
    component: SurveyDataComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
