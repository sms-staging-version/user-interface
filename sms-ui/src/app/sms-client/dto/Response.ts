import { Survey } from './Survey';

import { Answer } from './Answer';

export class Responses {
    id: number;
    userEmail: string;
    surveyId: Survey;
    answerId: Answer;

    constructor(id: number, userEmail: string, surveyId: Survey, answerId: Answer) {
      this.id = id;
      this.userEmail = userEmail;
      this.surveyId = surveyId;
      this.answerId = answerId;
    }
  }
