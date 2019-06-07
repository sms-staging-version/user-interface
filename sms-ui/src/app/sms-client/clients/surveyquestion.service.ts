// do not delete this one SurveyQuestionService is for SurveyQuestion conjunction
// while QuestionOfSurveyService is for the question model

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyQuestion } from '../dto/surveyQuestion';

@Injectable({
  providedIn: 'root'
})
export class SurveyQuestionService {

  constructor(private http: HttpClient) { }

  private context = 'survey-service/junction_survey_questions';

getTemplate(surveyId: number): Observable<SurveyQuestion[]> {
    return this.http.get<SurveyQuestion[]>(`${this.context}/surveyId/${surveyId}`);
  }

  save(sq: SurveyQuestion): Observable<SurveyQuestion> {
    return this.http.post<SurveyQuestion>(`${this.context}`, sq);
  }
}
