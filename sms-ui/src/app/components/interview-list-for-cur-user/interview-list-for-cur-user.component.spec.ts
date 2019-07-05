import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewListForCurUserComponent } from './interview-list-for-cur-user.component';

describe('InterviewListForCurUserComponent', () => {
  let component: InterviewListForCurUserComponent;
  let fixture: ComponentFixture<InterviewListForCurUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewListForCurUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewListForCurUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
