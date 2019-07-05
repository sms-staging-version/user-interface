
/**
 *  the purpose of this component is to send associete input for a preticular interview
 * 
 * 
 * there is only one fuction to send the informaiton and there's two function to assign an ID to the 
 * interview format object
 * 
 * this component utilizes associet-feedback-service.ts and utilizes the interview format DTO
 * 
 * 
 */

import { Component, OnInit } from '@angular/core';
import { AssociateFeedbackService, AssociateFeedback } from './associate-feedback.service';
import { Router } from '@angular/router';
import { InterviewFormat } from 'src/app/sms-client/dto/InterviewFormat';
import { AssignSurveyComponent } from '../survey/assign-survey/assign-survey.component';

@Component({
  selector: 'app-associate-feedback-form',
  templateUrl: './associate-feedback-form.component.html',
  styleUrls: ['./associate-feedback-form.component.scss']
})
export class AssociateFeedbackFormComponent implements OnInit {

  /**
   *
   *
   * @private
   * @type {Date}
   * @memberof AssociateFeedbackFormComponent
   */
  private _maxDate: Date;
  private _minDate: Date;
  _descriptionProvided = false;
  private receivedNotifications: Date;
  _dayNotice = false;
  _interviewFormatStr = '';
  _proposedFormatStr = '';

  
  associateInputList: any[]; 
/**
 *this is an array list of our object 
 *
 * @type {AssociateFeedback}
 * @memberof AssociateFeedbackFormComponent
 */
associateFeed: AssociateFeedback;
  interviewFormat: InterviewFormat; /** this is the interview object that we grab */
  proposedFormat: InterviewFormat;
  constructor(private associateFeedbackService: AssociateFeedbackService, private router: Router) {
    this._maxDate = new Date();
    this._maxDate.setDate(this._maxDate.getDate());
  }

  /**
   * these are our getters and setter for our varibles
   *
   * @type {Date}
   * @memberof AssociateFeedbackFormComponent
   */
  get maxDate(): Date {
    return this._maxDate;
  }

  set maxDate(temp: Date) {
    this._maxDate = temp;
  }

 
  get descriptionProvided(): boolean {
    return this._descriptionProvided;
  }

 
  set descriptionProvided(temp: boolean) {
    this._descriptionProvided = temp;
  }

  // get recievedNotifications(): Date {
  //   return this._recievedNotifications;
  // }

  // set recievedNotifications(temp: Date) {
  //   this._recievedNotifications = temp;
  // }

  
  get dayNotice(): boolean {
    return this._dayNotice;
  }

  
  set dayNotice(temp: boolean) {
    this._dayNotice = temp;
  }

  get interviewFormatStr() {
    return this._interviewFormatStr;
  }

  set interviewFormatStr(temp: string) {
    this._interviewFormatStr = temp;
  }
  get proposedFormatStr() {
    return this._proposedFormatStr;
  }

  set proposedFormatStr(temp: string) {
    this._proposedFormatStr = temp;
  }

  ngOnInit() {

  }

  /**
   *
   * this function is grabbing the associate input and assigning
   *  it to the interview it belongs to.
   * 
   * @memberof AssociateFeedbackFormComponent
   */
  postAssociateInput() {

    this.assignInterviewFormat();
    this.assignProposedFormat();
    let associateInput = new AssociateFeedback(this._descriptionProvided, this.receivedNotifications, this._dayNotice, this.interviewFormat, this.proposedFormat);
    this.associateFeedbackService.postAssociateInput(associateInput).subscribe(data => {
      data.receivedNotifications = this.receivedNotifications,
        data.descriptionProvided = this._descriptionProvided,
        data.interviewFormat = this.interviewFormat,
        data.proposedFormat = this.proposedFormat,
        data.dayNotice = this._dayNotice

    });

    window.location.reload();
  
  }
  /**
   *
   * this method help assign an id to the the onject best on the value provided 
   * 
   * @memberof AssociateFeedbackFormComponent
   */

  assignInterviewFormat() {
    if (this._interviewFormatStr == 'On Site') {
      this.interviewFormat = { 'id': 1, 'formatDesc': this._interviewFormatStr };
    } else if (this._interviewFormatStr == 'In Person') {
      this.interviewFormat = { 'id': 2, 'formatDesc': this._interviewFormatStr };
    } else if (this._interviewFormatStr == 'Video Call') {
      this.interviewFormat = { 'id': 3, 'formatDesc': this._interviewFormatStr };
    } else if (this._interviewFormatStr == 'Phone Call') {
      this.interviewFormat = { 'id': 4, 'formatDesc': this._interviewFormatStr };
    }
  }

  /**
   *
   * this method help assign an id to the the onject best on the value provided  
   * @memberof AssociateFeedbackFormComponent
   */
  assignProposedFormat() {
    if (this._proposedFormatStr == 'On Site') {
      this.proposedFormat = { 'id': 1, 'formatDesc': this._proposedFormatStr };
    } else if (this._proposedFormatStr == 'In Person') {
      this.proposedFormat = { 'id': 2, 'formatDesc': this._proposedFormatStr };
    } else if (this._proposedFormatStr == 'Video Call') {
      this.proposedFormat = { 'id': 3, 'formatDesc': this._proposedFormatStr };
    } else if (this._proposedFormatStr == 'Phone Call') {
      this.proposedFormat = { 'id': 4, 'formatDesc': this._proposedFormatStr };
    }
  }
}
