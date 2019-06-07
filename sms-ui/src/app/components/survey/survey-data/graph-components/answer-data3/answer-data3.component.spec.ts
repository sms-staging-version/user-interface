import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData3Component } from './answer-data3.component';

describe('AnswerData3Component', () => {
  let component: AnswerData3Component;
  let fixture: ComponentFixture<AnswerData3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
