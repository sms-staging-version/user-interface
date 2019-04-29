import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { SurveyQuestion, Question } from 'src/app/sms-client/dto/surveyQuestion';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';
import { SurveyResponseService } from 'src/app/sms-client/clients/survey-response.service';
import { QuestionOfSurveyService } from 'src/app/sms-client/clients/survey-question.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  surveyTitle: string;
  listOfSurvey: Survey[];
  curTemplate: SurveyQuestion[];
  curTempAnswers: Array<Answer[]>;

  qList: Question[];
  ArrayOfResponseAnswerList: Array<string[]>;
  arrOfCounts: Array<number[]>;
  constructor(private surveyService: SurveyService,
              private answerService: SurveyAnswerService,
              private sqService: SurveyQuestionService,
              private responseService: SurveyResponseService) {}

  ngOnInit() {
    this.listOfSurvey = [];
    this.surveyService.findAll().subscribe(
      data => {
        for (const temp of data) {
          if (temp.published) {
            this.listOfSurvey.push(temp);
          }
        }

      }
    );
  }

  getGraph(surveyId: number, title: string) {
    this.surveyTitle = title;
    this.answerService.findAll().subscribe(
      ansList => {
    this.responseService.findBySurveyId(surveyId).subscribe(
      data => {
        this.sqService.getTemplate(surveyId).subscribe(
          sqList => {
            this.ArrayOfResponseAnswerList = new Array (sqList.length);
            this.arrOfCounts = new Array (sqList.length);
            this.qList = new Array (sqList.length);
            for (const sq of sqList) {
              const tempAnsList = [];
              const count = [];
              if (sq.questionId.typeId === 5) {
                for (const temp of ansList) {
                  if (temp.questionId === sq.questionId.questionId) {
                    tempAnsList.push(temp.answer);
                  }
                }
               } else {
                 data.sort((a, b) => a.answerId.id - b.answerId.id);
                 for (const res of data) {
                  if (res.answerId.questionId === sq.questionId.questionId) {
                    if (tempAnsList.length === 0 || !tempAnsList.includes(res.answerId.answer)) {
                      tempAnsList.push(res.answerId.answer);
                      count.push(1);
                    } else if (tempAnsList.includes(res.answerId.answer)) {
                      count[tempAnsList.indexOf(res.answerId.answer)]++;
                    }
                  }
                }
               }
              this.qList[sq.questionOrder - 1] = sq.questionId;
              this.ArrayOfResponseAnswerList[sq.questionOrder - 1] = tempAnsList;
              this.arrOfCounts[sq.questionOrder - 1] = count;
            }
          }
        );
      }
    );
  }
  );
  }
}
