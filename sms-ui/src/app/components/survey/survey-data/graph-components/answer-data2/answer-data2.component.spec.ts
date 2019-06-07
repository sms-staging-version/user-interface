import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerData2Component } from './answer-data2.component';

describe('AnswerData2Component', () => {
  let component: AnswerData2Component;
  let fixture: ComponentFixture<AnswerData2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerData2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
