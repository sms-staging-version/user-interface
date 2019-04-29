import { Component, OnInit } from '@angular/core';
import { FakeServiceComponent } from '../fake-service/fake-service.component';
import { Cohort } from '../sms-client/dto/Cohort';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SmsInterceptor } from '../sms-client/interceptors/sms.interceptor';


@Component({
  selector: 'app-sub-man2-cohort',
  templateUrl: './sub-man2-cohort.component.html',
  styleUrls: ['./sub-man2-cohort.component.scss']
})
export class SubMan2CohortComponent implements OnInit {
  _listFilter = '';
  closeResult: string;
  ngswitchCase = '';
  addressList;
  trainer;
  get listFilter(): string {
    return this._listFilter;
  }
  modalShow = false
  exportedCohort: Cohort;

  openModal(name: string, content) {
    for (let temp of this.filteredCohort) {
      if (temp['cohortName'] == name) {
        this.exportedCohort = temp;
        this.modalShow = true;
        this.open(content);
        this.ngswitchCase = 'editAssociates'
      }
    }
  }



  set listFilter(temp: string) {
    this._listFilter = temp;
    this.filteredCohort = this._listFilter ? this.performFilter(this._listFilter) : this.allCohorts;
  }
  wholeName = '';
  allCohorts: Cohort[] = [];
  filteredCohort;

  constructor(private _fakeService: FakeServiceComponent, private http: HttpClient, private modalService: NgbModal) {
    this.allCohorts = this.filteredCohort;
  }
  performFilter(filterBy: string): Cohort[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allCohorts.filter((metaEmployee: Cohort) =>
      metaEmployee['cohortName'].toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit() {
    this.http.get('cohorts').toPromise().then(data => {
      this.filteredCohort = data;
      this.allCohorts = this.filteredCohort;
    })
    this.getAddresses();
  }
  open(content) {
    this.ngswitchCase = 'addCohort'
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.ngOnInit();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close() {
    this.modalService.dismissAll();
  }
  getAddresses() {
    this.http.get('user-service/addresses/is-training-location/true').toPromise().then(data => {
      this.addressList = data;
    })
  }
  getTrainerById(id: number) {
    this.http.get(`users/${id}`).toPromise().then(data => {
      return data;
    })
  }
  addCohort(cohort: NgForm) {
    console.log('in the submit')
    console.log(cohort.value['trainer'])
    for (let temp of this.addressList) {
      if (temp.addressId == cohort.value['location']) {
        var location = temp;
      }
    }
    let body = {
      'cohortId': 0,
      'cohortName': cohort.value['dp'],
      'cohortDescription': cohort.value['description'],
      'cohortToken': '',
      'address': location,
      'startDate': cohort.value['startDate'],
      'endDate': cohort.value['endDate'],
      'users': null,
      'trainer': {}
    }
    this.http.post(`cohorts/cohort/trainer/${cohort.value['trainer']}`, body).toPromise().then(data => {
    })
  }
}
