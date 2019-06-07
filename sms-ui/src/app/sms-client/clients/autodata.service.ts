import { Injectable, OnInit } from '@angular/core';
import { InterviewService } from './interview.service';
import { Interview } from '../dto/Interview';

@Injectable({
  providedIn: 'root'
})
export class AutodataService implements OnInit {

  private urlVar: 'interview-service/interview';
  private InterviewList: Interview[] = [];
  private filteredInterviewList: Interview[] = [];

  constructor(private interview: InterviewService) {

    this.interview.getInterviews().subscribe(data => {
      this.InterviewList = data;
      console.log(this.InterviewList);
    });
  }


  ngOnInit() {
    /* this.interview.getInterviews().subscribe(data => {
      this.InterviewList = data;
      console.log(this.InterviewList);
    }); */
  } 

  associateInterviewCount(email: string): number {
    this.filteredInterviewList = this.performFilter(email);
    return this.filteredInterviewList.length;
  }

  performFilter(filterBy: string): Interview[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.InterviewList.filter((temp: Interview) =>
      (temp.associateEmail.toLocaleLowerCase().indexOf(filterBy) !== -1
      )
    );
  }
}
