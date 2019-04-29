import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { InterviewFormat } from 'src/app/sms-client/dto/InterviewFormat';

@Injectable({
  providedIn: 'root'
})
export class AssociateFeedback {
  '_descriptionProvided': boolean;
  '_recievedNotifications': string;
  '_dayNotice': boolean;
  '_interviewFormat': InterviewFormat;
  '_proposedFormat': InterviewFormat;

  constructor(descriptionProvided: boolean, recievedNotifications: string,
              dayNotice: boolean, interviewFormat: InterviewFormat, proposedFormat: InterviewFormat) {
    this._descriptionProvided = descriptionProvided;
    this._recievedNotifications = recievedNotifications;
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

  postAssociateInput(associateInput): Observable<AssociateFeedback> {

    console.log('the asso input proposed format is ');
    console.log(associateInput.proposedFormat);
    console.log('the asso input interview format is ');
    console.log(associateInput.interviewFormat);
    console.log('the asso input desc format is ');
    console.log(associateInput.descriptionProvided);
    console.log('the asso input dayNotice format is ');
    console.log(associateInput.dayNotice);
    console.log(associateInput._recievedNotifications);


    console.log('inside of post associate');
    return this.httpClient.post<AssociateFeedback>(this.url, {
      recievedNotifications: '2019-08-03 14:00:00',
      descriptionProvided: associateInput.descriptionProvided,

      interviewFormat: associateInput.interviewFormat,
      proposedFormat: associateInput.proposedFormat,
      dayNotice: associateInput.dayNotice}
     );
  }
}

