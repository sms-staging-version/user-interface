import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerFeedback } from '../dto/ManagerFeedback';

@Injectable({
  providedIn: 'root'
})
export class StagingmanagerService {

  /* injecting a service into the component */
  constructor(private http: HttpClient) { }

  private url= 'interview-service/interview/Feedback/InterviewId';

  getMgrFeedback(): Observable<ManagerFeedback[]>{
    return this.http.get<ManagerFeedback[]>(this.url);
  }
}
