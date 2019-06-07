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

  // Observable to find every survey deployed under a particular id
  findBySurveyId(sId: number): Observable<SurveyHistory[]> {
    return this.http.get<SurveyHistory[]>(`${this.context}/survey/${sId}`);
  }

update(surveyHistory: SurveyHistory): Observable<SurveyHistory> {
  return this.http.patch<SurveyHistory>(`${this.context}/taken`, surveyHistory);
}
save(surveyHistory: SurveyHistory): Observable<SurveyHistory> {
  return this.http.post<SurveyHistory>(`${this.context}`, surveyHistory);
}
}
