import { Component, OnInit, Inject } from '@angular/core';

import { NewInterviewService } from 'src/app/sms-client/clients/new-interview.service';
import { Cohort } from 'src/app/sms-client/dto/Cohort';
import { NewInterviewData } from 'src/app/sms-client/dto/NewInterviewData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.component.html',
  styleUrls: ['./new-interview.component.scss']
})
export class NewInterviewComponent implements OnInit {

  private dateSelection:Date;
  private minDate: Date;
  private time: Date = new Date();
  private showSpinners = false;
  private myCohorts:Cohort[];
  private cohortId: number;

  private dropdown2NotReady = true;
  private buttonDisabled = true;


  private selectedCohort: string;
  private selectedAssociate: string; 
  private selectedLocation: string;
  private selectedClient: string;

// tslint:disable-next-line: variable-name
  private _cohortName = [];
// tslint:disable-next-line: variable-name

  private _associateName = [];


  newInterview: NewInterviewData;




  constructor(private newInt: NewInterviewService, private router: Router) {
     this.minDate= new Date();
     this.minDate.setDate(this.minDate.getDate());
  
  }

  ngOnInit() {
    this.newInt.findAllCohorts().subscribe(data => {
      this.myCohorts=data;
      console.log(this.myCohorts);



      for (let i = 0; i < this.myCohorts.length; i++) {
        this._cohortName.push(this.myCohorts[i].cohortName);

      }
    });
  }


  sendInterviewData() {

    this.newInterview = new NewInterviewData();
    this.newInt.findCohortUsers(this.cohortId).subscribe(userdata => {
// tslint:disable-next-line: prefer-for-of
      for (let l = 0; l < userdata.length; l++) {
        if (userdata[l].firstName + ' ' + userdata[l].lastName === this.selectedAssociate) {
          this.newInterview.associateEmail = userdata[l].email;
          break;
        }
      }
      this.newInterview.client = this.selectedClient;
      this.newInterview.location = this.selectedLocation;
      this.newInterview.date = this.dateSelection;


      this.newInt.createNewInterview(this.newInterview).subscribe(interview => {

    });
    });

   window.location.reload();
  }

// tslint:disable-next-line: ban-types
  firstDropDownChanged(val: String): boolean {



// tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < this.myCohorts.length; j++) {
      if (val === this.myCohorts[j].cohortName) {

        this.cohortId = this.myCohorts[j].cohortId;
        break;
      }
    }

    if (val === 'Select Cohort') {

      this.dropdown2NotReady = true;
      this._associateName.length = 0;
      return false;
    }
    this.newInt.findCohortUsers(this.cohortId).subscribe(userdata => {


      this._associateName.length = 0;
// tslint:disable-next-line: prefer-for-of
      for (let k = 0; k < userdata.length; k++) {
        this._associateName.push(`${userdata[k].firstName + ' ' + userdata[k].lastName}`);
      }
      this.dropdown2NotReady = false;

    });


    return true;
  }
  submitReadyCheck() {


    if (this.dateSelection != null && this.selectedCohort != 'Select Cohort'
      && this.selectedAssociate != 'Select An Associate' && this.selectedLocation !== null
      && this.dateSelection != null && this.selectedClient != null) {

      this.buttonDisabled = false;
    }
  }

}
