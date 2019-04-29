import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData7Component } from './answer-data7.component';

describe('AnswerData7Component', () => {
  let component: AnswerData7Component;
  let fixture: ComponentFixture<AnswerData7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
