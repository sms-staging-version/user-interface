/**
 * the purpose of this service is to send an assocciet form to the server
 * 
 * using the end point pervoide by the url variable
 * 
 * it also utilizes the interview formate DTO
 * 
 * 
 * 
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { InterviewFormat } from 'src/app/sms-client/dto/InterviewFormat';

@Injectable({
  providedIn: 'root'
})
export class AssociateFeedback {
  '_descriptionProvided': boolean;
  '_receivedNotifications': Date;
  '_dayNotice': boolean;
  '_interviewFormat': InterviewFormat;
  '_proposedFormat': InterviewFormat;

  constructor(descriptionProvided: boolean, receivedNotifications: Date, dayNotice: boolean, interviewFormat: InterviewFormat, proposedFormat: InterviewFormat) {

    this._descriptionProvided = descriptionProvided;
    this._receivedNotifications = receivedNotifications;
    this._dayNotice = dayNotice;
    this._interviewFormat = interviewFormat;
    this._proposedFormat = proposedFormat;
  }

  get descriptionProvided(): boolean {
    return this._descriptionProvided;
  }
 
  set descriptionProvided(temp: boolean) {
   this._descriptionProvided = temp;
  }

  get receivedNotifications(): Date {
    return this._receivedNotifications;
  }

  set receivedNotifications(temp: Date) {
    this._receivedNotifications = temp;
  }

  get dayNotice(): boolean {
    return this._dayNotice;
  }

  set dayNotice(temp: boolean) {
    this._dayNotice = temp;
  }

  get interviewFormat(): InterviewFormat {
    return this._interviewFormat;
  }

  set interviewFormat(temp: InterviewFormat) {
    this._interviewFormat = temp;
  }

  get proposedFormat(): InterviewFormat {
    return this._proposedFormat;
  }

  set proposedFormat(temp: InterviewFormat) {
    this._proposedFormat = temp;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AssociateFeedbackService {

  associateInput: AssociateFeedback;

  private url = 'interview-service/interview/associateInput';

  constructor(private httpClient: HttpClient) {

  }

  getAssociateInput(): Observable<AssociateFeedback> {
    return this.httpClient.get<AssociateFeedback>(this.url);
  }
/**
 *this method is observable to send the associate feednack information to the serve
 *
 * it takes an object of a parameter and it reeturn null
 * 
 * @param {*} associateInput
 * @returns {Observable<AssociateFeedback>}
 * @memberof AssociateFeedbackService
 */
postAssociateInput(associateInput): Observable<AssociateFeedback> {

    // console.log('the asso input proposed format is ');
    // console.log(associateInput.proposedFormat);
    // console.log('the asso input interview format is ');
    // console.log(associateInput.interviewFormat);
    // console.log('the asso input desc format is ');
    // console.log(associateInput.descriptionProvided);
    // console.log('the asso input dayNotice format is ');
    // console.log(associateInput.dayNotice);
    console.log('DESCRIPTION FOR INTERVIEW IS: ' + associateInput.interviewFormat.formatDesc);
    console.log('ID FOR INTERVIEW IS: ' + associateInput.interviewFormat.id)
    console.log('DESCRIPTION FOR PROSPOSED IS: ' + associateInput.proposedFormat.formatDesc);
    console.log('ID FOR PROPOSED IS: ' + associateInput.proposedFormat.id)


    // console.log('inside of post associate');
    return this.httpClient.post<AssociateFeedback>(this.url, {
      receivedNotifications: associateInput.receivedNotifications,
      descriptionProvided: associateInput.descriptionProvided,

      interviewFormat: associateInput.interviewFormat,
      proposedFormat: associateInput.proposedFormat,
      dayNotice: associateInput.dayNotice}
     );
  }
}

