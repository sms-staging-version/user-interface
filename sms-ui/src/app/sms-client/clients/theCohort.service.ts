import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cohort } from '../dto/Cohort';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CohortService {

  constructor(private http: HttpClient) {
  }
  private context = 'user-service/cohorts';
  findAllCohorts(): Observable<Cohort[]> {
    return this.http.get<Cohort[]>(`${this.context}`);
  }

}
