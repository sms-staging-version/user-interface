import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DayNotice, ActualDayNotice } from '../sms-client/dto/DayNotice';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DaynoticeService {
  
  constructor(private http: HttpClient) { }

  private url = 'interview-service/interview';
  private hourNoticeURL = 'interview-service/interview/reports/interview24';
  
getAllInterviews(): Observable<DayNotice[]> {
    return this.http.get<DayNotice[]>(this.url);
  }

get24HrNotice(): Observable<ActualDayNotice[]> {
    return this.http.get<ActualDayNotice[]>(this.hourNoticeURL);
  }
  
}

