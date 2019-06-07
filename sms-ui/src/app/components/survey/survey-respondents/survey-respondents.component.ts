
import { Component, OnInit, Input } from '@angular/core';
import { SurveyHistory } from 'src/app/sms-client/dto/SurveyHistory';
import { SurveyHistoryService } from 'src/app/sms-client/clients/survey-history.serivce';

@Component({
  selector: 'app-survey-respondents',
  templateUrl: './survey-respondents.component.html',
  styleUrls: ['./survey-respondents.component.scss']
})
export class SurveyRespondentsComponent implements OnInit {

  @Input() surveyId: number;

  listOfResp: SurveyHistory[];
  constructor(private surveyHistoryService: SurveyHistoryService) { }

  ngOnInit() {
    this.surveyHistoryService.findBySurveyId(this.surveyId).subscribe(
      data => {
        this.listOfResp = data;
      }
    );
  }

  getSurveys(sId: number) {
    console.log('in getSurveys in survey-respondents component');
    this.surveyHistoryService.findBySurveyId(sId).subscribe(
      data => {
        this.listOfResp = data;
      }
    );
  }

}
