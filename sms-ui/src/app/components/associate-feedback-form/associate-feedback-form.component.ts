import { Component, OnInit } from '@angular/core';
import { AssociateFeedbackService, AssociateFeedback } from './associate-feedback.service';
import { Router } from '@angular/router';
import { InterviewFormat } from 'src/app/sms-client/dto/InterviewFormat';

@Component({
  selector: 'app-associate-feedback-form',
  templateUrl: './associate-feedback-form.component.html',
  styleUrls: ['./associate-feedback-form.component.scss']
})
export class AssociateFeedbackFormComponent implements OnInit {

  public minDate: Date = new Date('01/01/2016');
  public maxDate: Date = new Date('12/31/2019');
  public value: Date = new Date('05/16/2017');

  _descriptionProvided = false;
  _recievedNotifications = '';
  _dayNotice = false;
  _interviewFormatStr = '';
  _proposedFormatStr = '';

  associateInputList: any[];

  associateFeed: AssociateFeedback;
  interviewFormat: InterviewFormat;
  proposedFormat: InterviewFormat;
  constructor(private associateFeedbackService: AssociateFeedbackService, private router: Router) {

  }

  get descriptionProvided(): boolean {
    return this._descriptionProvided;
  }

  set descriptionProvided(temp: boolean) {
    this._descriptionProvided = temp;
  }

  get recievedNotifications(): string {
    return this._recievedNotifications;
  }

  set recievedNotifications(temp: string) {
    this._recievedNotifications = temp;
  }

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

    //this.postAssociateInput();
  }

  postAssociateInput() {

    console.log('in the submit')
    console.log(this._interviewFormatStr)
    console.log(this.interviewFormat)
    console.log(this.dayNotice)
    this.interviewFormat = {'formatDesc':this._interviewFormatStr};
    console.log('seperator')
    this.proposedFormat={'formatDesc':this._proposedFormatStr};;
    console.log('made it past the formats')
    let associateInput = new AssociateFeedback(this._descriptionProvided, this._recievedNotifications, this._dayNotice, this.interviewFormat, this.proposedFormat);
    let tempString = '2019-08-03 14:00:00';
    console.log('past the constructor')
    associateInput.interviewFormat.formatDesc = this._interviewFormatStr;
    associateInput.proposedFormat.formatDesc = this._proposedFormatStr;
    console.log('interview Format')
    console.log('proposed Format')
    console.log(this.proposedFormat)
    associateInput.recievedNotifications=tempString;

    this.associateFeedbackService.postAssociateInput(associateInput).subscribe(data => {
      data.recievedNotifications = tempString,
        data.descriptionProvided = this._descriptionProvided,
        data.interviewFormat = this.interviewFormat,
        data.proposedFormat = this.proposedFormat,
        data.dayNotice = this._dayNotice

    });
  }

  newInterviewFeedback() {
    console.log("inside of new interview feedback");

  }
}
