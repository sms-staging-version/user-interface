import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { SurveyQuestion, Question } from 'src/app/sms-client/dto/surveyQuestion';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';
import { Responses } from 'src/app/sms-client/dto/Response';
import { SurveyResponseService } from 'src/app/sms-client/clients/survey-response.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  listOfSurvey: Survey[];
  curTemplate: SurveyQuestion[];
  curTempAnswers: Array<Answer[]>;
  ArrayOfResponseAnswerList: Array<string[]>;
  arrOfCounts: Array<number[]>;
  constructor(private surveyService: SurveyService,
              private sqService: SurveyQuestionService,
              private answerService: SurveyAnswerService,
              private responseService: SurveyResponseService) {}

  ngOnInit() {
    this.surveyService.findAll().subscribe(
      data => {
        // data[i].dateCreated = new Date(data[i].dateCreated);
        // data[i].closingDate = new Date(data[i].closingDate);
        this.listOfSurvey = data;
      }
    );
  }

  closeSurvey(index: number) {
    this.listOfSurvey[index].closingDate = new Date();
    this.surveyService.save(this.listOfSurvey[index]).subscribe(
      data => {
        this.listOfSurvey[index] = data;
        console.log(this.listOfSurvey[index]);
      }
    );
  }

  checkTemplate(surveyId: number) {
    this.ArrayOfResponseAnswerList = [];
    this.curTemplate = [];
    this.sqService.getTemplate(surveyId).subscribe(
      data => {
        this.curTemplate = data;
        this.curTempAnswers = new Array(data.length);
// tslint:disable-next-line: forin
        for (const i in data) {
          this.answerService.findByQuestionId(data[i].questionId.questionId).subscribe(
            curQuestionAnswerList => {
              this.curTempAnswers[i] = curQuestionAnswerList;
            }
          );
        }
      }
    );
  }

  getGraph(surveyId: number) {
    this.curTemplate = [];
    this.responseService.findBySurveyId(surveyId).subscribe(
      data => {
        let temp = [data[0].answerId.answer];
        let count = [1];
        for (let i = 0; i < data.length - 1; i++) {
          if (!data[i] || !data[i].answerId) { continue; }
          if (data[i].answerId.questionId === data[i + 1].answerId.questionId) {

            if (data[i].answerId.id !== data[i + 1].answerId.id) {
              temp.push(data[i + 1].answerId.answer);
              count.push(1);
            } else {
              count[count.length - 1]++;
            }
          } else {
            this.ArrayOfResponseAnswerList.push(temp);
            this.arrOfCounts.push(count);
            count = [1];
            temp = [data[i + 1].answerId.answer];
          }
        }
        console.log(this.ArrayOfResponseAnswerList);
        console.log(this.arrOfCounts);
      }
    );
  }

  // Method will Display all respondents of a survey to user
  getRespondents(surveyId: number) {
    console.log('This goes here');
  }
}
