import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../dto/surveyQuestion';
import { SurveyHistory } from '../dto/SurveyHistory';

@Injectable({
  providedIn: 'root'
})
export class SurveyHistoryService {

  constructor(private http: HttpClient) { }

  private context = 'survey-service/history';

findByEmail(email: string): Observable<SurveyHistory[]> {
  return this.http.post<SurveyHistory[]>(`${this.context}/email`, email);
}

}
