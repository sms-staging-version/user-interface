import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/sms-client/dto/Answer';
import { Question, SurveyQuestion } from 'src/app/sms-client/dto/surveyQuestion';
import { Survey } from 'src/app/sms-client/dto/Survey';
import { SurveyService } from 'src/app/sms-client/clients/survey.service';
import { SurveyQuestionService } from 'src/app/sms-client/clients/surveyquestion.service';
import { SurveyAnswerService } from 'src/app/sms-client/clients/survey-answer.service';
import { QuestionOfSurveyService } from 'src/app/sms-client/clients/survey-question.service';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit {
  title: string;
  isTemplate = false;
  description: string;
  curQuestionType: number = null;
  curQuestionString: string;
  curAnswerList: Answer[] = [];
  arrofAnswerList: Array<Answer[]> = [];
  inputAnswerString: string;
  questionList: Question[] = [];
  constructor(
    private surveyService: SurveyService,
    private sqService: SurveyQuestionService,
    private answerService: SurveyAnswerService,
    private questionService: QuestionOfSurveyService) {
  }
  selectOption(qType: number) {
    this.curAnswerList = [];
    switch (qType.toString()) {
      case '1':
        this.addAnswerOverload1('True');
        this.addAnswerOverload1('False');
        break;
      case '4':
        this.addAnswerOverload1('1');
        this.addAnswerOverload1('2');
        this.addAnswerOverload1('3');
        this.addAnswerOverload1('4');
        this.addAnswerOverload1('5');
        break;
      case '6':
        this.addAnswerOverload1('yes');
        this.addAnswerOverload1('no');
        break;
      case '7':
        this.addAnswerOverload1('Strongly Agree');
        this.addAnswerOverload1('Agree');
        this.addAnswerOverload1('Neutral');
        this.addAnswerOverload1('Disagree');
        this.addAnswerOverload1('Strongly Disagree');
        break;
    }
  }
  addAnswer() {
    const temp = new Answer(null, this.inputAnswerString, this.questionList ? this.questionList.length + 1 : 1);
    this.curAnswerList.push(temp);

  }

  addAnswerOverload1(ans: string) {
    const temp = new Answer(null, ans, this.questionList ? this.questionList.length + 1 : 1);
    this.curAnswerList.push(temp);
  }
  undo() {
    if (!this.curAnswerList.length) { return; }
    this.curAnswerList.pop();
  }
  addQuestion() {
    this.questionList.push(new Question(
      null, this.curQuestionString, this.curQuestionType));

    this.arrofAnswerList.push(this.curAnswerList);
    this.curAnswerList = [];
    this.curQuestionType = null;
  }
  submit() {
    let survey = new Survey(null, this.title, this.description, new Date(),
      null, this.isTemplate, !this.isTemplate);

    // tslint:disable-next-line: align
    this.surveyService.save(survey).subscribe(
      data => {
        survey = data;
        console.log(survey);
        for (let i = 0; i < this.questionList.length; i++) {
          this.questionService.save(this.questionList[i]).subscribe(
            q => {
              this.questionList[i] = q;
              const sq = new SurveyQuestion(null, survey, this.questionList[i], i + 1);
              this.sqService.save(sq).subscribe(
                sqBack => { console.log(sqBack); });
              console.log(this.questionList[i]);

              for (const temp of this.arrofAnswerList[i]) {
                temp.questionId = this.questionList[i].questionId;
              }
              this.answerService.saveList(this.arrofAnswerList[i]).subscribe(
                ans => {
                  this.arrofAnswerList[i] = ans;
                  if (!ans) { alert('Question answers ' + i + ': ' + this.questionList[i].question + ' were not sent successfully'); }
                }
              );
            }
          );
        }
        alert('successful');
      }
    );

  }
  ngOnInit() {
  }

  drop() {
    window.location.reload();
  }
}
