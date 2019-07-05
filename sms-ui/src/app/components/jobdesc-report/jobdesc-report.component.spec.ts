import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdescReportComponent } from './jobdesc-report.component';

describe('JobdescReportComponent', () => {
  let component: JobdescReportComponent;
  let fixture: ComponentFixture<JobdescReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdescReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdescReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
