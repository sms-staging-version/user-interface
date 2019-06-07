import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../dto/Answer';
import { Question } from '../dto/surveyQuestion';
@Injectable({
  providedIn: 'root'
})
export class SurveyAnswerService {

  constructor(private http: HttpClient) { }

  private context = 'survey-service/answers';

  findAll(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.context}`);
  }

  findByQuestionId(qId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.context}/question/${qId}`);
  }

  save(ans: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.context}`, ans);
  }
  saveList(answerList: Answer[]): Observable<Answer[]> {
    return this.http.post<Answer[]>(`${this.context}/multi-answers`, answerList);
  }
}
