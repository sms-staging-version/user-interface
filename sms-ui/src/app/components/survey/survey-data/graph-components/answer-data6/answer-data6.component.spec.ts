import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData6Component } from './answer-data6.component';

describe('AnswerData6Component', () => {
  let component: AnswerData6Component;
  let fixture: ComponentFixture<AnswerData6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
