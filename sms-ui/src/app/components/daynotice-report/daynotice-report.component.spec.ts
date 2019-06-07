import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaynoticeReportComponent } from './daynotice-report.component';

describe('DaynoticeReportComponent', () => {
  let component: DaynoticeReportComponent;
  let fixture: ComponentFixture<DaynoticeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaynoticeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaynoticeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
