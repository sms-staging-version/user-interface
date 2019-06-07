import { Component, OnInit } from '@angular/core';
import { DayNotice } from 'src/app/sms-client/dto/DayNotice';
import { DaynoticeService } from 'src/app/services/daynotice.service';

@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrls: ['./feedback-report.component.scss']
})

/* the purpose of this component is to retrieve all of the associates whom
were requested to submit an interview feedback by their staging manager and
display it on the application.

*/
export class FeedbackReportComponent implements OnInit {

  feedbackList: DayNotice[];
  feedbackListFilter: DayNotice[];
  listFilterVar = '';
  boolFilterVar = 'all';


  constructor(private dayNotice: DaynoticeService) { }

  /*we have getters and setters for the lists and the list filters so we
  can easily use these functions without actually using the ()

  we are are performing filters within the list that allows us to 
  search within the list by name and by email.
  */

  get listFilter(): string {
    return this.listFilterVar;
  }
  set listFilter(temp: string) {
    this.listFilterVar = temp;
    this.feedbackListFilter = (this.listFilterVar) ?
      this.performFilter(this.listFilterVar) : this.feedbackList;
  }

  get reviewFilter(): string {
    return this.boolFilterVar;
  }
  set reviewFilter(temp: string) {
    this.boolFilterVar = temp;
    this.feedbackListFilter = this.boolFilterVar ?
      this.performFilter(this.listFilterVar) : this.feedbackList;
  }

  ngOnInit() {
    this.getAllInterviews();
  }

  getAllInterviews() {
    this.dayNotice.getAllInterviews().subscribe((data: DayNotice[]) => {
      this.feedbackList = data;
      this.feedbackListFilter = data;

    });
  }

  //performs a search filter that dynamicallt changes what is being displayed on the list
  // to show a specific search function (by email or place/location)

  performFilter(filterBy: string): DayNotice[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.feedbackList.filter((temp: DayNotice) =>
      (temp.associateEmail.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.place.toLocaleLowerCase().indexOf(filterBy) !== -1
      ) /* &&
      (this.boolFilterVar === 'all'
        || (this.boolFilterVar === 'true' && temp.feedback.feedbackRequested == true)
        || (this.boolFilterVar === 'false' && temp.feedback.feedbackRequested == false)
      ) */
    );
  }
}
