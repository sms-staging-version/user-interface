import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../dto/User';
import { Survey } from '../dto/Survey';
import { Observable } from 'rxjs';
import { SurveyQuestion } from '../dto/surveyQuestion';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  private context = 'survey-service/surveys';


  findAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.context}`);
  }

  save(surveyToUpdate: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${this.context}`, surveyToUpdate);
  }

}
