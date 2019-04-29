import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DayNotice } from '../sms-client/dto/DayNotice';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DaynoticeService {
  
  constructor(private http: HttpClient) { }

  private url = 'interview-service/interview';
  
getAllInterviews(): Observable<DayNotice[]> {
    return this.http.get<DayNotice[]>(this.url);
  }
}
