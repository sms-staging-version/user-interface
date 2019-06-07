import { Component, OnInit, Directive, Input } from '@angular/core';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyHistoryService } from 'src/app/sms-client/clients/survey-history.service';
import { SurveyHistory } from 'src/app/sms-client/dto/SurveyHistory';
import { SurveyQuestion } from 'src/app/sms-client/dto/surveyQuestion';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';
import { Responses } from 'src/app/sms-client/dto/Response';
import { SurveyResponseService } from 'src/app/sms-client/clients/survey-response.service';

/**
 * This component imports services from the sms client folder in order to employ the logic defined in those classes.
 */
@Component({
  selector: 'app-assign-survey',
  templateUrl: './assign-survey.component.html',
  styleUrls: ['./assign-survey.component.scss']
})
export class AssignSurveyComponent implements OnInit {
/**
 * Initializing variables and assigning 
 */
  listOfSurvey: Survey[];
  listOfSurveyHistory: SurveyHistory[];
  curSH: SurveyHistory;
  curTemplate: SurveyQuestion[];
  curTempAnswers: Array<Answer[]>;
  inputAns: string[] = [];
  inputMultiAns: string[] = [];
  inputMultiAnsQNum: number[] = [];
  listFilterVar: string;
  filteredListOfSurvey: Survey[];
  constructor(
    /**
     * Dependency Injecting the services into the constructor.
     */
    private surveyService: SurveyService,
    private historyService: SurveyHistoryService,
    private sqService: SurveyQuestionService,
    private answerService: SurveyAnswerService,
    private responseService: SurveyResponseService
    ) { }

  ngOnInit() {
    /**
     * On the initialization of the class, get current instance 
     * of Survey history and survey list. 
     *Utilizing the findAll method from the survey service, 
     we subscribe to surveyList using the observable from the survey service.
     From there we use the findByEmail method from the surveyHistory service and within the parameters
     we retrieve the userEmail from the local storage. We then execute the subscribe method again and fulfill
     the logic provided within the for loop, its nested for loop, and the nested if statements. The logic within
     the for loops and if else statements self document their logic.


     */
    this.listOfSurveyHistory = [];
    this.listOfSurvey = [];
    this.surveyService.findAll().subscribe(
      surveyList => {
        this.historyService.findByEmail( localStorage.getItem('userEmail')).subscribe(
          data => {
            for (const temp of data) {
              for (const suv of surveyList) {
                if (suv.surveyId === temp.surveyId && !temp.dateCompleted) {
                  this.listOfSurvey.push(suv);
                }
              }
              if (!temp.dateCompleted) {
                this.listOfSurveyHistory.push(temp);
              }
              this.filteredListOfSurvey = this.listOfSurvey;
            }
          }
        );
      }
    );
  }

  /**
   * From the httpclient, we acquire the usage of the get and set methods. We use this to list, and filter surveys.
   * 
   */

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

  /**
   * 
   * The following block of close is to open the survey. 
   * When you select the survey assigned to you, it'll retrieve the information and open in a modal. 
   * You can submit the information in the survey, which will send the information back to surveyList
   * and add the information to survey data and survey status respectively. 
   */

  openSurvey(sh: SurveyHistory) {
    this.curSH = sh;
    const surveyId = sh.surveyId;
    this.curTemplate = [];
    this.curTempAnswers = [];
    this.sqService.getTemplate(surveyId).subscribe(
      data => {console.log(data);
        this.curTemplate = data;

        for (const i of Object.keys(data)) {
          this.answerService.findByQuestionId(data[i].questionId.questionId).subscribe(
            curQuestionAnswerList => {
              this.curTempAnswers[i] = curQuestionAnswerList;
            }
          );
        }
      }
    );
  }

  close() {
    window.location.reload();
  }
  
  /**
   * You can submit the information in the survey, which will send the information back to surveyList
   * and add the information to survey data and survey status respectively. 
   */
  submit() {
    const responseList: Responses[] = [];

    for (const i of Object.keys(this.inputAns)) {
      let tempAns: Answer = null;
      if (this.curTemplate[i].questionId.typeId === 5) {
        tempAns = new Answer(null, this.inputAns[i], this.curTemplate[i].questionId.questionId);
        this.answerService.save(tempAns).subscribe(
          data => {
            this.responseService.save(
              new Responses(null, localStorage.getItem('userEmail'), this.curTemplate[i].surveyId, data)
            ).subscribe();
          }
        );

      } else {
        for (const ansForCurQuestion of this.curTempAnswers[i]) {
          if (ansForCurQuestion.answer === this.inputAns[i]) {
            tempAns = ansForCurQuestion;
            break;
          }
        }
      }
      if (tempAns.id) {
        responseList.push(new Responses(null, localStorage.getItem('userEmail'), this.curTemplate[i].surveyId, tempAns));
      }
    }

    for (const x in this.inputMultiAns) {
      if (this.inputMultiAns[x]) {
        const hide = document.getElementById(x.toString()) as HTMLInputElement;
        const iPlus1 = Number(hide.value);
        const index = Number(x) / iPlus1 - 1;
        const tempSurvey = this.curTemplate[iPlus1 - 1].surveyId;
        const tempAns = this.curTempAnswers[iPlus1 - 1][index];
        responseList.push(new Responses(null, localStorage.getItem('userEmail'), tempSurvey, tempAns));
      }
    }
    this.responseService.saveList(responseList).subscribe(
      hope => {
        if (hope) {
          alert("successful");console.log(hope);
        }
      }
    );
    this.curSH.dateCompleted = new Date();
    this.historyService.update(this.curSH).subscribe();
  }
}