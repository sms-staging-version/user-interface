import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateFeedbackFormComponent } from './associate-feedback-form.component';

describe('AssociateFeedbackFormComponent', () => {
  let component: AssociateFeedbackFormComponent;
  let fixture: ComponentFixture<AssociateFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
