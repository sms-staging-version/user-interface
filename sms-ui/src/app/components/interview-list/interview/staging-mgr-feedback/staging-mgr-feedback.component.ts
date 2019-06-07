import { Component, OnInit } from '@angular/core';
import { StagingmanagerService } from 'src/app/sms-client/clients/stagingmanager.service';
import { Router } from '@angular/router';
import { InterviewFeedback } from 'src/app/sms-client/dto/InterviewFeedback';

@Component({
  selector: 'app-staging-mgr-feedback',
  templateUrl: './staging-mgr-feedback.component.html',
  styleUrls: ['./staging-mgr-feedback.component.scss']
})
export class StagingMgrFeedbackComponent implements OnInit {


  private feedbackVar: InterviewFeedback;
  sManagerServ: any;

  get feedback() {
    return this.feedbackVar;
  }


  constructor(private mngrfeedback: StagingmanagerService, private routerMod: Router) { 

  }

  ngOnInit() {
    // Need to not hardcode feedback id (WIP)
    this.sManagerServ.getMgrFeedback(2).subscribe(data => { this.feedbackVar = data; });
  }


  /* getManagerFeedback(){
    this.mngrfeedback.retrieveFeedback().subscribe(
      data => {
        //const ourField = 'base_experience';
        console.log(data);
        //console.log('experience? ', data[ourField]);
      }

  } */



}
