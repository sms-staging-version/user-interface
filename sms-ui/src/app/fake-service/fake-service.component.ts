import { Component, OnInit } from '@angular/core';
import { SomeAssociate } from '../sms-client/dto/Employees';
import { Cohort } from '../sms-client/dto/Cohort';

@Component({
  selector: 'app-fake-service',
  templateUrl: './fake-service.component.html',
  styleUrls: ['./fake-service.component.scss']
})
export class FakeServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getEmployees(): SomeAssociate[] {
    return [
      {
        firstName: 'Frozone',
        lastName: 'Cable',
        role: 'Admin',
        email: 'coldasice@email.com',
        phone: '777658'
      },
      {
        firstName: 'Eraser',
        lastName: 'Animeguy',
        role: 'Trainer',
        email: 'eraseyomama@email.com',
        phone: '879878568'
      },
      {
        firstName: 'Static',
        lastName: 'Shock',
        role: 'Staging Managers',
        email: 'Shocker@email.com',
        phone: '76876576434'
      }
    ];
  }
  /*getCohorts(): Cohort[] {
    return [
      {
          CName: 'Cohort1',
          Location: 'thisLocation',
          Token: 'cohortToken',
          StartD: 'today',
          EndD: 'tomorrow',
          Trainer: 'Trainers',
          Email: 'emailme@email.com'
      },
      {
        CName: 'Cohort2',
        Location: 'otherplace',
        Token: '7298347',
        StartD: 'yesterday',
        EndD: 'later',
        Trainer: 'Trevin Blake',
        Email: 'emailme2@email.com'
    }
    ];
  }
*/
}
