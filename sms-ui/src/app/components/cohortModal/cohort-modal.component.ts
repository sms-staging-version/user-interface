import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cohort } from 'src/app/sms-client/dto/Cohort';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/sms-client/dto/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cohort-modal',
  templateUrl: './cohort-modal.component.html',
  styleUrls: ['./cohort-modal.component.scss']
})
export class CohortModalComponent implements OnInit {

  @Input() cohort: Cohort;
  userList;
  cotrainer:boolean =true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAssociates(this.cohort.cohortId).toPromise().then(data => {
      this.userList = data;
    });
    console.log(this.cohort.coTrainer)
    if(this.cohort.coTrainer==undefined||null){
      this.cotrainer=false;
      this.findUsersByRole('TRAINING_MANAGER').toPromise().then(data=>{
        console.log(data)
      })
    }

  }
  emailSubmit(associateEmail: NgForm) {
    this.http.post(`cohorts/token/${this.cohort['cohortToken']}`, {
      'email': associateEmail.value['cohortEmail'],
    }).toPromise().then(data => {
      console.log(data)
    })
  }

  removeUserFromCohort(email:string) {
    console.log(email)
    this.http.post(`cohorts/removeuser/${this.cohort['cohortToken']}`, {
      'email': email,
    }).toPromise().then(data => {
      console.log(data)
    })
  }

  getAssociates(id: number) {
    return this.http.get(`/users/cohorts/${id}`)
  }

  submitCotrainer(){
    let email = document.getElementById('cotrainerEmail') as HTMLInputElement;
    console.log(email.value);
    this.http.post(`cohorts/addcotrainer/${this.cohort['cohortToken']}`,{'email':email.value}).toPromise().then(data =>{
      console.log(data)
    })
  }

  removeCotrainer(){
    this.http.delete(`cohorts/removecotrainer/${this.cohort['cohortToken']}`).toPromise().then(data=>{
      console.log(data)
    })
  }

  setCohortDate(){
    let date=document.getElementById('endingDate') as HTMLInputElement;
    console.log(date.value)
    this.cohort['endDate']=date.value;
    console.log(this.cohort)
    this.http.put('cohorts',this.cohort).toPromise().then(data=>{
      console.log(data)
    })
  }

  findUsersByRole = (role: string) => {
    return this.http.get(`/cognito/users/groups/${role}`);
  }
}
