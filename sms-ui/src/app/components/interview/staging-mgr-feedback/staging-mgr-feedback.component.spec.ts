import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingMgrFeedbackComponent } from './staging-mgr-feedback.component';

describe('StagingMgrFeedbackComponent', () => {
  let component: StagingMgrFeedbackComponent;
  let fixture: ComponentFixture<StagingMgrFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagingMgrFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingMgrFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
