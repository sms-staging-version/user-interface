import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../dto/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersClientService {

  private context = 'user-service/users';

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get<User>(`${this.context}/${id}`);
  }

  findByEmail(email: string) {
    console.log("the email we are using to check is : " +email);
    return this.http.get<User>(`${this.context}/email/${email}`);
  }


  updateUser(currentUser: User): Observable<User> {
    console.log("in the user service");
     return this.http.patch<User>(`${this.context}`, currentUser);
  }
  findAll() {
    return this.http.get<User[]>(`${this.context}`);
  }
  findAllByCohortId(cohortId: number) {
    return this.http.get<User[]>(`${this.context}/cohorts/${cohortId}`);
  }
}
