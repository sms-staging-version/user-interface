export class SurveyHistory {
    id: number;
// tslint:disable-next-line: variable-name
    surveyId: number;
    useremail: string;
// tslint:disable-next-line: variable-name
    dateAssigned: Date;
// tslint:disable-next-line: variable-name
    dateCompleted: Date;

// tslint:disable-next-line: variable-name
    constructor(id: number, survey_id: number, useremail: string, date_assigned: Date, date_completed: Date) {
      this.id = id;
      this.surveyId = survey_id;
      this.useremail = useremail;
      this.dateAssigned = date_assigned;
      this.dateCompleted = date_completed;
      }
  }
