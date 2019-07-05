import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyQuestion } from 'src/app/sms-client/dto/surveyQuestion';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';

// may be used to persist pages while the user is away from computer
import { CookieStorage } from '@aws-amplify/auth';
import { QuestionOfSurveyService } from 'src/app/sms-client/clients/survey-question.service';

@Component({
  selector: 'app-survey-grid',
  templateUrl: './survey-grid.component.html',
  styleUrls: ['./survey-grid.component.scss']
})
/**
 * This component maps to our survey template tab in the html page
 * This is suppose to allow us to create templates that can then be assigned
 * to different people. Optimization is needed for this component
 */
export class SurveyGridComponent implements OnInit {

  listOfSurvey: Survey[];
  filteredListOfSurvey: Survey[];
  curTemplate: SurveyQuestion[];
  curTempAnswers: Array<Answer[]>;
  listFilterVar: string;

  /**
   * loading the services from from the sms-client/clients path all services involving the
   * database will go in the clients folder so that the interceptor can find it.
   */
  constructor(
    private surveyService: SurveyService,
    private sqService: SurveyQuestionService,
    private answerService: SurveyAnswerService,
    private qOSService: QuestionOfSurveyService) { }

    /**
     * standard data loading with a filtered list for searching
     */
  ngOnInit() {
    this.listOfSurvey = [];
    this.surveyService.findAll().subscribe(
      data => {
        for (const temp of data) {
          if (temp.template) {
            this.listOfSurvey.push(temp);
          }
        }
        this.filteredListOfSurvey = this.listOfSurvey;
      }
    );
  }

  /**
   * The next three methods deal with the list being filtered
   */
  get listFilter(): string {
    return this.listFilterVar;
  }
  
  /**
   *  This defines what the list is going to be filtering by when you type
   */
  set listFilter(temp: string) {
    this.listFilterVar = temp;
    this.filteredListOfSurvey = (this.listFilterVar) ?
    this.performFilter(this.listFilterVar) : this.listOfSurvey;
  }

  /**
   * This will also decide what to filter and how it is typed
   * This could use some polishing mainly a way to sort by date.
   * 
   * @param filterBy 
   */
  performFilter(filterBy: string): Survey[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listOfSurvey.filter((temp: Survey) =>
      (temp.title.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.description.toLocaleLowerCase().indexOf(filterBy) !== -1
      )
    );
  }

  /**
   * It is important that we close our surveys
   * @param index 
   */
  closeSurvey(index: number) {
    this.listOfSurvey[index].closingDate = new Date();
    this.surveyService.save(this.listOfSurvey[index]).subscribe(
      data => {
        this.listOfSurvey[index] = data;
      }
    );
  }

  /**
   * This is going to handle the creation of the survey. 
   */
  create() {
    const temp = this.curTemplate[0].surveyId;
    temp.published = !temp.published;
    temp.template = !temp.template;
    this.sqService.getTemplate(temp.surveyId).subscribe(
      qSConjuctions=>{
        this.surveyService.save(temp).subscribe(
          data => {
            alert("success");
            for(let temp of qSConjuctions){
              let sq = new SurveyQuestion(null, data, temp.questionId,temp.questionOrder);
              this.sqService.save(sq).subscribe();
            }
          }
        );
        
      }
    );
    
  }
  /**
   * This is to check template gets the current tempate which in this case will
   * return grab our question id for us.
   */
  checkTemplate(surveyId: number) {
    this.curTemplate = [];
    this.curTempAnswers = [];
    this.sqService.getTemplate(surveyId).subscribe(
      data => {
        this.curTemplate = data;
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
}
