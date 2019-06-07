import { Component, OnInit } from '@angular/core';
import { DaynoticeService } from 'src/app/services/daynotice.service';
import { Router } from '@angular/router';
import { DayNotice, ActualDayNotice } from 'src/app/sms-client/dto/DayNotice';

/*the purpose of this component is to retrieve all of the 
associates who had a 24 hour notice for their interview and display 
that informatiopn on the application. 

*/

@Component({
  selector: 'app-daynotice-report',
  templateUrl: './daynotice-report.component.html',
  styleUrls: ['./daynotice-report.component.scss']
})
export class DaynoticeReportComponent implements OnInit {

  dayNoticeList: ActualDayNotice[];
  listFilterVar = '';
  dayNoticeListFilter: ActualDayNotice[];
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
    this.dayNoticeListFilter = (this.listFilterVar) ?
      this.performFilter(this.listFilterVar) : this.dayNoticeList;
  }

  get reviewFilter(): string {
    return this.boolFilterVar;
  }
  set reviewFilter(temp: string) {
    this.boolFilterVar = temp;
    this.dayNoticeListFilter = this.boolFilterVar ?
      this.performFilter(this.listFilterVar) : this.dayNoticeList;
  }

  ngOnInit() {

    //calls this function when the component is loading
   this.get24Hr();
  }
//retrieves all of the associates/interviews and sets that data into the dayNoticeList
  get24Hr() {
    this.dayNotice.get24HrNotice().subscribe((data: ActualDayNotice[]) => {
      this.dayNoticeList = data;
     // this.dayNoticeList = this.filterByTrue();
      this.dayNoticeListFilter = data;
    });
  }

//this was my attempt at filtering the results by showing only the true values for dayNotice
//it works but I went about it a different way but decided to keep the method in here just in case
  filterByTrue(): ActualDayNotice[] {
    return this.dayNoticeList.filter((randomV: ActualDayNotice) => (randomV.twentyFourAssoc) == false);

  }


//performs the actual filtering for the table 
//by name, by email
// the drop down shown in the application filters the result set by true or false
  performFilter(filterBy: string): ActualDayNotice[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.dayNoticeList.filter((temp: ActualDayNotice) =>
      (temp.assocEmail.toLocaleLowerCase().indexOf(filterBy) !== -1
        || temp.assocName.toLocaleLowerCase().indexOf(filterBy) !== -1) &&
         (this.boolFilterVar === 'all'
        || (this.boolFilterVar === 'true' && temp.twentyFourAssoc == true)
        || (this.boolFilterVar === 'false' && temp.twentyFourAssoc == false)
      )
    ); 
  }
}

