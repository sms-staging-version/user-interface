import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData1Component } from './answer-data1.component';
/* Do we even test? */
describe('AnswerData1Component', () => {
  let component: AnswerData1Component;
  let fixture: ComponentFixture<AnswerData1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
