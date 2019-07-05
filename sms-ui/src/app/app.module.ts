import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { AuthLoadingComponent } from './components/auth-loading/auth-loading.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CognitoService } from './services/cognito.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmsClientModule } from './sms-client/sms-client.module';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { NewInterviewComponent } from './components/new-interview/new-interview.component';
import { AssociateFeedbackFormComponent } from './components/associate-feedback-form/associate-feedback-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ReportsComponent } from './reports/reports.component';
import { InterviewComponent } from './interview/interview.component';
import { ManageComponent } from './manage/manage.component';
import { MngrSubAssociatesComponent } from './mngr-sub-associates/mngr-sub-associates.component';
import { SubMan2CohortComponent } from './sub-man2-cohort/sub-man2-cohort.component';
import { FakeServiceComponent } from './fake-service/fake-service.component';
import { SurveyCreatorComponent } from './components/survey/survey-creator/survey-creator.component';
import { CohortModalComponent } from './components/cohortModal/cohort-modal.component';
import { SurveyListComponent } from './components/survey/survey-list/survey-list.component';
import { TimestampPipe } from './pipe/timestamp.pipe';
import { SurveyGridComponent } from './components/survey/survey-grid/survey-grid.component';
import { AnswerData2Component } from './components/survey/survey-data/graph-components/answer-data2/answer-data2.component';
import { AnswerData1Component } from './components/survey/survey-data/graph-components/answer-data1/answer-data1.component';
import { SurveyDataComponent } from './components/survey/survey-data/survey-data.component';
import { AssignSurveyComponent } from './components/survey/assign-survey/assign-survey.component';
import { AnswerData3Component } from './components/survey/survey-data/graph-components/answer-data3/answer-data3.component';
import { AnswerData4Component } from './components/survey/survey-data/graph-components/answer-data4/answer-data4.component';
import { AnswerData5Component } from './components/survey/survey-data/graph-components/answer-data5/answer-data5.component';
import { AnswerData6Component } from './components/survey/survey-data/graph-components/answer-data6/answer-data6.component';
import { AnswerData7Component } from './components/survey/survey-data/graph-components/answer-data7/answer-data7.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { StagingMgrFeedbackComponent } from './components/interview-list/interview/staging-mgr-feedback/staging-mgr-feedback.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RegistrationComponent } from './components/registration/registration.component';
import { DaynoticeGraphComponent } from './components/daynotice-report/daynotice-graph/daynotice-graph.component';
import { DaynoticeReportComponent } from './components/daynotice-report/daynotice-report.component';
import { JobdescReportComponent } from './components/jobdesc-report/jobdesc-report.component';
import { SurveyRespondentsComponent } from './components/survey/survey-respondents/survey-respondents.component';
import { FeedbackReportComponent } from './components/feedback-report/feedback-report.component';
import { AutodataComponent } from './components/autodata/autodata.component';
import { InterviewListForCurUserComponent } from './components/interview-list-for-cur-user/interview-list-for-cur-user.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { NgHttpLoaderModule } from 'ng-http-loader';

//loading screen citation: https://github.com/mpalourdio/ng-http-loader
//refresh capabilities citation: https://stackblitz.com/edit/angular-r6-detect-browser-refresh?file=src%2Fapp%2Fapp.component.ts
//Router Guard citation: https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1
const routes: Routes = [ 
  {path: 'interviewlistForCurUser',
   component:InterviewListForCurUserComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'profileInfo',
    component: ProfileInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportsRoute',
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'InterViewRoute',
    component: InterviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'CreateInterviewRoute',
    component: NewInterviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AssociateFeedbackRoute',
    component: AssociateFeedbackFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ManagerFeedbackRouting',
    component: StagingMgrFeedbackComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'InterviewListRoute',
    component: InterviewListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AutoDataRoute',
    component: AutodataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'FeedbackRoute',
    component: FeedbackReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DayNoticeRoute',
    component: DaynoticeReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'JobDescRoute',
    component: JobdescReportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ManageRoute',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'subMan1Internal',
        component: MngrSubAssociatesComponent
      },
      {
        path: 'cohort',
        component: SubMan2CohortComponent
      },
      {
        path: '',
        component: MngrSubAssociatesComponent
      }
    ]
  },
  {
    path: 'SurveyRoute',
    component: SurveyListComponent,
    canActivate: [AuthGuard]
  },
  // need to change back to SurveyComponentlater later, now just testing functionalities
  {path: 'NewRegistration', 
  component: RegistrationComponent,
  canActivate: [AuthGuard]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfileInfoComponent,
    HomeComponent,
    AuthLoadingComponent,
    InterviewListComponent,
    AssociateFeedbackFormComponent,
    SurveyCreatorComponent,
    StagingMgrFeedbackComponent,
    SurveyGridComponent,
    ReportsComponent,
    InterviewComponent,
    ManageComponent,
    MngrSubAssociatesComponent,
    SubMan2CohortComponent,
    FakeServiceComponent,
    NewInterviewComponent,
    SurveyCreatorComponent,
    AssociateFeedbackFormComponent,
    SurveyCreatorComponent,
    CohortModalComponent,
    SurveyCreatorComponent,
    SurveyListComponent,
    TimestampPipe,
    SurveyDataComponent,
    AnswerData1Component,
    AnswerData2Component,
    AssignSurveyComponent,
    AnswerData3Component,
    AnswerData4Component,
    AnswerData5Component,
    AnswerData6Component,
    AnswerData7Component,

    SurveyRespondentsComponent,

    AutodataComponent,

    DaynoticeReportComponent,
    JobdescReportComponent,
    RegistrationComponent,
    FeedbackReportComponent,
    DaynoticeGraphComponent,
   


    JobdescReportComponent,
    AutodataComponent,
    InterviewListForCurUserComponent,
    DaynoticeGraphComponent
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule,
    SmsClientModule, AppRoutingModule,
    RouterModule.forRoot(routes),
    // Javier's thing
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserModule,
    NgHttpLoaderModule.forRoot(),
    DatePickerModule,


  ],
  providers: [
    CognitoService, FakeServiceComponent, NavbarComponent, AuthGuard
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
