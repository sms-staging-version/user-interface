import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterviewFeedback } from '../dto/InterviewFeedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StagingmanagerService {

  constructor(private http: HttpClient) { }

  private url = 'interview-service/interview/Feedback/InterviewId/';

  getMgrFeedback(id: number): Observable<InterviewFeedback> {
    return this.http.get<InterviewFeedback>(this.url + id);
  }
}
