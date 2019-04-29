import { Component, OnInit } from '@angular/core';
import { DaynoticeService } from 'src/app/services/daynotice.service';
import { DaynoticeReportComponent } from '../daynotice-report/daynotice-report.component';
import { DayNotice } from 'src/app/sms-client/dto/DayNotice';


@Component({
  selector: 'app-jobdesc-report',
  templateUrl: './jobdesc-report.component.html',
  styleUrls: ['./jobdesc-report.component.scss']
})
export class JobdescReportComponent implements OnInit {

  _id = 0;
  _associateEmail = '';
  _place = '';

  descProvidedList: DayNotice[];
  noDescList: DayNotice[];

  constructor(private interview: DaynoticeService) { }

  get id(): number {
    return this._id;
  }

  set id(temp: number) {
    this._id = temp;
  }

  get associateEmail(): string {
    return this._associateEmail;
  }

  set associateEmail(temp: string) {
    this._associateEmail = temp;
  }

  get place(): string {
    return this._place;
  }

  set place(temp: string) {
    this._place = temp;
  }

  ngOnInit() {
    this.getAllInterviews();

  }

  getAllInterviews() {
    this.interview.getAllInterviews().subscribe((data: DayNotice[]) => {
      this.descProvidedList = data;
      this.descProvidedList = this.descProvidedFilter();
      this.noDescList = data;
      this.noDescList = this.noDescFilter();

    });
  }

  descProvidedFilter(): DayNotice[] {
    return this.descProvidedList.filter((randomV: DayNotice) => (randomV.associateInput.descriptionProvided) == true);
  }

  noDescFilter(): DayNotice[] {
    return this.noDescList.filter((randomV: DayNotice) => (randomV.associateInput.descriptionProvided) == false);
  }

}
