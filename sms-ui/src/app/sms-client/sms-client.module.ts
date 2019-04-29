import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SmsInterceptor } from './interceptors/sms.interceptor';
import { UsersClientService } from './clients/users-client.service';
import { SurveyService } from './clients/survey.service';
import { SurveyQuestionService } from './clients/surveyquestion.service';
import { SurveyAnswerService } from './clients/survey-answer.service';
import { SurveyResponseService } from './clients/survey-response.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    UsersClientService,
    SurveyService,
    SurveyQuestionService,
    SurveyAnswerService,
    SurveyResponseService,
    {provide: HTTP_INTERCEPTORS, useClass: SmsInterceptor, multi: true}
  ]
})
export class SmsClientModule { }
