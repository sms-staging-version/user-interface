import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { SurveyQuestion, Question } from 'src/app/sms-client/dto/surveyQuestion';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';
import { Responses } from 'src/app/sms-client/dto/Response';
import { SurveyResponseService } from 'src/app/sms-client/clients/survey-response.service';
import { QuestionOfSurveyService } from 'src/app/sms-client/clients/survey-question.service';
import { Cohort } from 'src/app/sms-client/dto/Cohort';
import { CohortService } from 'src/app/sms-client/clients/theCohort.service';
import { User } from 'src/app/sms-client/dto/User';
import { UsersClientService } from 'src/app/sms-client/clients/users-client.service';
import { SurveyHistoryService } from 'src/app/sms-client/clients/survey-history.service';
import { SurveyHistory } from 'src/app/sms-client/dto/SurveyHistory';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  surveyId: number;
  respPressed: boolean;

  surveyTitle: string;
  listOfSurvey: Survey[];
  curTemplate: SurveyQuestion[];
  curTempAnswers: Array<Answer[]>;

  cohorts: Cohort[];
  users: User[];
  statusCheckList: boolean[] = [];
  cohortCheckList: boolean[] = [];
  userCheckList: boolean[] = [];
  shownEmailList: string[] = [];

  qList: Question[];
  ArrayOfResponseAnswerList: Array<string[]>;
  arrOfCounts: Array<number[]>;
  listFilterVar: string;
  filteredListOfSurvey: Survey[];
  constructor(private surveyService: SurveyService,
              private answerService: SurveyAnswerService,
              private sqService: SurveyQuestionService,
              private responseService: SurveyResponseService,
              private cohortService: CohortService,
              private usersClientService: UsersClientService,
              private surveyHistoryService: SurveyHistoryService) {}
  ngOnInit() {
    this.listOfSurvey = [];
    this.surveyService.findAll().subscribe(
      data => {
        for (const temp of data) {
          if (!temp.template) {
            this.listOfSurvey.push(temp);
          }
        }
        this.filteredListOfSurvey = this.listOfSurvey;
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

  getCohort() {
    this.cohortService.findAllCohorts().subscribe(
      data => {
        this.cohorts = data;
      }
    );
  }

  getUser(surveyId: number) {
    this.usersClientService.findAll().subscribe(
      data => {
        this.users = data;
      }
    );
    this.surveyId = surveyId;
  }

  assignSurvey() {
    const userEmailList: string[] = [];
    this.shownEmailList = [];
    
    // tslint:disable-next-line: forin
    for (const j in this.users) {
      const cur = this.users[j].userStatus.statusId;
      if ((this.userCheckList[j]) || (cur <= 3 && cur >= 1 && this.statusCheckList[0]) ||
      (cur <= 10 && cur >= 4 && this.statusCheckList[1]) ||
      (cur <= 17 && cur >= 11 && this.statusCheckList[2]) ||
      (cur <= 17 && cur >= 4 && this.statusCheckList[3])) {
        if (!userEmailList.includes(this.users[j].email)) {
          userEmailList.push(this.users[j].email);
        }
      }
    }

    for (const email of userEmailList) {
      this.pushSurveyHistory(email, this.surveyId);
    }

    for (const i in this.cohortCheckList) {
      if (this.cohortCheckList[i]) {
        this.usersClientService.findAllByCohortId(this.cohorts[i].cohortId).subscribe(data => {
          for (const user of data) {
            if (!userEmailList.includes(user.email)) {
              userEmailList.push(user.email);
              this.pushSurveyHistory(user.email, this.surveyId);
            }
          }
        });
      }
    }
   
  }

  pushSurveyHistory(email, surveyId) {
    const surHistory = new SurveyHistory(null, surveyId, email, new Date(), null);
    this.surveyHistoryService.save(surHistory).subscribe(
      data => {
               this.shownEmailList.push(data.userEmail);
      }
    );
  }
  get listFilter(): string {
    return this.listFilterVar;
  }
  set listFilter(temp: string) {
    this.listFilterVar = temp;
    this.filteredListOfSurvey = (this.listFilterVar) ?
      this.performFilter(this.listFilterVar) : this.listOfSurvey;
  }

  performFilter(filterBy: string): Survey[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listOfSurvey.filter((temp: Survey) =>
      (temp.title.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.description.toLocaleLowerCase().indexOf(filterBy) !== -1
      )
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
            let tempArrOfAnsList = new Array (sqList.length);
            for (const i in sqList) {
              let tempI = sqList[i].questionOrder - 1;
              this.qList[tempI] = sqList[i].questionId;
              for (const ans of ansList) {
              // tslint:disable-next-line: forin
              // tslint:disable-next-line: max-line-length
                if (ans.questionId === sqList[i].questionId.questionId && (!this.ArrayOfResponseAnswerList[i] || !this.ArrayOfResponseAnswerList[i].includes(ans.answer))) {
                  if (!this.ArrayOfResponseAnswerList[tempI]) {
                    this.ArrayOfResponseAnswerList[tempI] = [];
                    tempArrOfAnsList[tempI] = [];
                  }
                  this.ArrayOfResponseAnswerList[tempI].push(ans.answer);
                  tempArrOfAnsList[tempI].push(ans.id);
                  }
              }
            }
            for (const res of data) {
              for (const index in this.ArrayOfResponseAnswerList) {
                if (tempArrOfAnsList[index].includes(res.answerId.id)) {
                  if (!this.arrOfCounts[index]) { this.arrOfCounts[index] = new Array (tempArrOfAnsList[index].length); }
                  const tempIndex = tempArrOfAnsList[index].indexOf(res.answerId.id);
                  this.arrOfCounts[index][tempIndex] = this.arrOfCounts[index][tempIndex] ? this.arrOfCounts[index][tempIndex] + 1 : 1;
                }
              }
            }
            console.log(this.ArrayOfResponseAnswerList);
            console.log(this.arrOfCounts);
          }
        );
      }
    );
  }
  );
  }

  getRespondents(surveyId: number) {
    // if (this.respPressed !== true) {
    //   console.log('The current surveyId is: ' + surveyId);
      this.surveyId = surveyId;
      this.respPressed = true;
    // } else {
    //   this.respPressed = false;
    // }
  }

  reload() {
    window.location.reload();
    this.shownEmailList = [];
  }
}