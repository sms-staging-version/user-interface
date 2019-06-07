import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/sms-client/clients/interview.service';
import { Interview } from 'src/app/sms-client/dto/Interview';

@Component({
  selector: 'app-interview-list-for-cur-user',
  templateUrl: './interview-list-for-cur-user.component.html',
  styleUrls: ['./interview-list-for-cur-user.component.scss']
})
export class InterviewListForCurUserComponent implements OnInit {
  
  private interviewList: Interview[] = [];
  private filteredInterviewList: Interview[] = [];
  private listFilterVar = '';
  private reviewFilterVar = 'all';
  private associateEmailSortDir = true;
  private managerEmailSortDir = true;
  private locationSortDir = true;
  private clientSortDir = true;
  private dateNotifiedSortDir = true;
  private dateScheduledSortDir = false;
  private dateReviewedSortDir = true;

  get listFilter(): string {
    return this.listFilterVar;
  }
  set listFilter(temp: string) {
    this.listFilterVar = temp;
    this.filteredInterviewList = (this.listFilterVar || this.reviewFilterVar !== 'all') ?
      this.performFilter(this.listFilterVar) : this.interviewList;
  }

  get reviewFilter(): string {
    return this.reviewFilterVar;
  }
  set reviewFilter(temp: string) {
    this.reviewFilterVar = temp;
    this.filteredInterviewList = this.reviewFilterVar ?
      this.performFilter(this.listFilterVar) : this.interviewList;
  }

  private interviewFeedbackDateReqVar: number;
  private interviewFeedbackDateRecVar: number;
  private interviewFeedbackDateDelVar: number;
  private interviewFeedbackStatusVar: string;
  private interviewFeedbackCommentsVar: string;

  get interviewFeedbackDateReq(): number {
    return this.interviewFeedbackDateReqVar;
  }

  get interviewFeedbackDateRec() {
    return this.interviewFeedbackDateRecVar;
  }

  get interviewFeedbackDateDel() {
    return this.interviewFeedbackDateDelVar;
  }

  get interviewFeedbackStatus() {
    return this.interviewFeedbackStatusVar;
  }

  get interviewFeedbackComments() {
    return this.interviewFeedbackCommentsVar;
  }

  private notificationDateVar: number;
  private descriptionProvidedVar: boolean;
  private proposedFormatVar: string;
  private actualFormatVar: string;

  get notificationDate() {
    return this.notificationDateVar;
  }

  get descriptionProvided() {
    return this.descriptionProvidedVar;
  }

  get proposedFormat() {
    return this.proposedFormatVar;
  }

  get actualFormat() {
    return this.actualFormatVar;
  }

  constructor(private interview: InterviewService) {
    this.ngOnInit();
  }

  ngOnInit() {
    let email = localStorage.getItem('userEmail');
    this.filteredInterviewList = [];
    this.interview.getInterviews().subscribe(data => {
      for(let temp of data){
        if(temp.associateEmail===email){
          this.filteredInterviewList.push(temp);
        }
      }
      this.sortByDateScheduled();
      this.interviewList = this.filteredInterviewList;
      }
    );
  }

  openAssociateInputModal(id: number) {
    let index = -1;

    for (let i = 0; i < this.filteredInterviewList.length; i++) {
      if (this.filteredInterviewList[i].id === id) {
        index = i;
        break;
      }
    }

    this.notificationDateVar = this.filteredInterviewList[index].associateInput.receivedNotifications;
    this.descriptionProvidedVar = this.filteredInterviewList[index].associateInput.descriptionProvided;
    this.proposedFormatVar = this.filteredInterviewList[index].associateInput.proposedFormat.formatDesc;
    this.actualFormatVar = this.filteredInterviewList[index].associateInput.interviewFormat.formatDesc;
  }

  openInterviewFeedbackModal(id: number) {
    let index = -1;

    for (let i = 0; i < this.filteredInterviewList.length; i++) {
      if (this.filteredInterviewList[i].id === id) {
        index = i;
        break;
      }
    }

    this.interviewFeedbackDateReqVar = this.filteredInterviewList[index].feedback.feedbackRequested;
    this.interviewFeedbackDateRecVar = this.filteredInterviewList[index].feedback.feedbackReceived;
    this.interviewFeedbackDateDelVar = this.filteredInterviewList[index].feedback.feedbackDelivered;
    this.interviewFeedbackStatusVar = this.filteredInterviewList[index].feedback.status.feedback_status_desc;
    this.interviewFeedbackCommentsVar = this.filteredInterviewList[index].feedback.feedback;
  }

  performFilter(filterBy: string): Interview[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.interviewList.filter((temp: Interview) =>
      (temp.associateEmail.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.managerEmail.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.place.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.client.clientName.toLocaleLowerCase().indexOf(filterBy) !== -1
      )
      && (this.reviewFilterVar === 'all'
        || (this.reviewFilterVar === 'reviewed' && temp.reviewed != null)
        || (this.reviewFilterVar === 'notreviewed' && temp.reviewed == null)
      )
    );
  }

  sortByAssociateEmail() {
    if (this.associateEmailSortDir) {
      this.filteredInterviewList.sort(this.compareByAssociateEmailAsc);
      this.associateEmailSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByAssociateEmailDesc);
      this.associateEmailSortDir = true;
    }
  }

  compareByAssociateEmailAsc(a: Interview, b: Interview) {
    if (a.associateEmail.toLocaleLowerCase() > b.associateEmail.toLocaleLowerCase()) {
      return 1;
    } else if (b.associateEmail.toLocaleLowerCase() > a.associateEmail.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByAssociateEmailDesc(a: Interview, b: Interview) {
    if (a.associateEmail.toLocaleLowerCase() < b.associateEmail.toLocaleLowerCase()) {
      return 1;
    } else if (b.associateEmail.toLocaleLowerCase() < a.associateEmail.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByManagerEmail() {
    if (this.managerEmailSortDir) {
      this.filteredInterviewList.sort(this.compareByManagerEmailAsc);
      this.managerEmailSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByManagerEmailDesc);
      this.managerEmailSortDir = true;
    }
  }

  compareByManagerEmailAsc(a: Interview, b: Interview) {
    if (a.managerEmail.toLocaleLowerCase() > b.managerEmail.toLocaleLowerCase()) {
      return 1;
    } else if (b.managerEmail.toLocaleLowerCase() > a.managerEmail.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByManagerEmailDesc(a: Interview, b: Interview) {
    if (a.managerEmail.toLocaleLowerCase() < b.managerEmail.toLocaleLowerCase()) {
      return 1;
    } else if (b.managerEmail.toLocaleLowerCase() < a.managerEmail.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByLocation() {
    if (this.locationSortDir) {
      this.filteredInterviewList.sort(this.compareByLocationAsc);
      this.locationSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByLocationDesc);
      this.locationSortDir = true;
    }
  }

  compareByLocationAsc(a: Interview, b: Interview) {
    if (a.place.toLocaleLowerCase() > b.place.toLocaleLowerCase()) {
      return 1;
    } else if (b.place.toLocaleLowerCase() > a.place.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByLocationDesc(a: Interview, b: Interview) {
    if (a.place.toLocaleLowerCase() < b.place.toLocaleLowerCase()) {
      return 1;
    } else if (b.place.toLocaleLowerCase() < a.place.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByClient() {
    if (this.clientSortDir) {
      this.filteredInterviewList.sort(this.compareByClientAsc);
      this.clientSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByClientDesc);
      this.clientSortDir = true;
    }  }

  compareByClientAsc(a: Interview, b: Interview) {
    if (a.client.clientName.toLocaleLowerCase() > b.client.clientName.toLocaleLowerCase()) {
      return 1;
    } else if (b.client.clientName.toLocaleLowerCase() > a.client.clientName.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByClientDesc(a: Interview, b: Interview) {
    if (a.client.clientName.toLocaleLowerCase() < b.client.clientName.toLocaleLowerCase()) {
      return 1;
    } else if (b.client.clientName.toLocaleLowerCase() < a.client.clientName.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByDateNotified() {
    if (this.dateNotifiedSortDir) {
      this.filteredInterviewList.sort(this.compareByNotifiedAsc);
      this.dateNotifiedSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByNotifiedDesc);
      this.dateNotifiedSortDir = true;
    }  }

  compareByNotifiedAsc(a: Interview, b: Interview) {
    if (a.notified > b.notified) {
      return 1;
    } else if (b.notified > a.notified) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByNotifiedDesc(a: Interview, b: Interview) {
    if (a.notified < b.notified) {
      return 1;
    } else if (b.notified < a.notified) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByDateScheduled() {
    if (this.dateScheduledSortDir) {
      this.filteredInterviewList.sort(this.compareByScheduledAsc);
      this.dateScheduledSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByScheduledDesc);
      this.dateScheduledSortDir = true;
    }  }

  compareByScheduledAsc(a: Interview, b: Interview) {
    if (a.scheduled > b.scheduled) {
      return 1;
    } else if (b.scheduled > a.scheduled) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByScheduledDesc(a: Interview, b: Interview) {
    if (a.scheduled < b.scheduled) {
      return 1;
    } else if (b.scheduled < a.scheduled) {
      return -1;
    } else {
      return 0;
    }
  }

  sortByDateReviewed() {
    if (this.dateReviewedSortDir) {
      this.filteredInterviewList.sort(this.compareByReviewedAsc);
      this.dateReviewedSortDir = false;
    } else {
      this.filteredInterviewList.sort(this.compareByReviewedDesc);
      this.dateReviewedSortDir = true;
    }  }

  compareByReviewedAsc(a: Interview, b: Interview) {
    if (a.reviewed > b.reviewed) {
      return 1;
    } else if (b.reviewed > a.reviewed) {
      return -1;
    } else {
      return 0;
    }
  }

  compareByReviewedDesc(a: Interview, b: Interview) {
    if (a.reviewed < b.reviewed) {
      return 1;
    } else if (b.reviewed < a.reviewed) {
      return -1;
    } else {
      return 0;
    }
  }
}
