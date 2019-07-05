import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData4Component } from './answer-data4.component';

describe('AnswerData4Component', () => {
  let component: AnswerData4Component;
  let fixture: ComponentFixture<AnswerData4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
