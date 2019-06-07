import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData5Component } from './answer-data5.component';

describe('AnswerData5Component', () => {
  let component: AnswerData5Component;
  let fixture: ComponentFixture<AnswerData5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
