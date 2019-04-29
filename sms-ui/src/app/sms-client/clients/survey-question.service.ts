// do not delete this one
// SurveyQuestionService is for SurveyQuestion conjunction
// while QuestionOfSurveyService is for the question model

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../dto/surveyQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionOfSurveyService {

  constructor(private http: HttpClient) { }

  private context = 'survey-service/questions';

findAll(): Observable<Question[]> {
  return this.http.get<Question[]>(`${this.context}`);
}
save(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.context}`, question);
  }

}
