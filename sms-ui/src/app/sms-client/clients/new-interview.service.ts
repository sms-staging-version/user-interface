import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cohort } from '../dto/Cohort';
import { Observable } from 'rxjs';
import { User } from '../dto/User';
import { NewInterviewData } from '../dto/NewInterviewData';
import { Interview } from '../dto/Interview';

@Injectable({
  providedIn: 'root'
})
export class NewInterviewService {

  constructor(private http: HttpClient) {

  }
  private context = 'cohorts';
  private newInterviewLink = 'interview-service/interview/new'
  findAllCohorts(): Observable<Cohort[]> {
    return this.http.get<Cohort[]>(`${this.context}`);
  }
  findCohortUsers(cId: number): Observable<User[]> {
    return this.http.get<User[]>(`users/${this.context}/${cId}`);
  }

  createNewInterview(interviewData: NewInterviewData): Observable<Interview> {
    console.log(interviewData.client +'  in the service');
    
    return this.http.post<Interview>(this.newInterviewLink, interviewData);
    

  }

}