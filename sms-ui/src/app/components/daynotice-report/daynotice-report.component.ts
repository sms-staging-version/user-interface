import { Component, OnInit } from '@angular/core';
import { DaynoticeService } from 'src/app/services/daynotice.service';
import { Router } from '@angular/router';
import { DayNotice } from 'src/app/sms-client/dto/DayNotice';

@Component({
  selector: 'app-daynotice-report',
  templateUrl: './daynotice-report.component.html',
  styleUrls: ['./daynotice-report.component.scss']
})
export class DaynoticeReportComponent implements OnInit {

  _id = 0;
  _associateEmail = '';
  _place = '';

  dayNoticeList: DayNotice[];
  filteredDayNoticeList: DayNotice[];

  noDayNoticeList: DayNotice[];
 

  constructor(private dayNotice: DaynoticeService) { }

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
    this.dayNotice.getAllInterviews().subscribe((data: DayNotice[]) => {
      this.dayNoticeList = data;
      this.noDayNoticeList = data;
      this.dayNoticeList = this.filterByDayNotice();
      this.noDayNoticeList = this.filterByNoNotice();

    });
  }

  filterByDayNotice(): DayNotice[] {
    return this.dayNoticeList.filter((randomV: DayNotice) => (randomV.associateInput.dayNotice) == true);
  }

  filterByNoNotice(): DayNotice[] {
    return this.noDayNoticeList.filter((randomV: DayNotice) => (randomV.associateInput.dayNotice) == false);
  }
}

