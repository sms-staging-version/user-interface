import { Survey } from './Survey';

export class Question {
    questionId: number;
    question: string;
    typeId: number;

    constructor(questionId: number, question: string, typeId: number) {
      this.questionId = questionId;
      this.question = question;
      this.typeId = typeId;
      }

  }

export class SurveyQuestion {
    id: number;
    surveyId: Survey;
    questionId: Question;
    questionOrder: number;

    constructor(id: number, surveyId: Survey, questionId: Question, questionOrder: number) {
      this.id = id;
      this.surveyId = surveyId;
      this.questionId = questionId;
      this.questionOrder = questionOrder;
      }
  }

