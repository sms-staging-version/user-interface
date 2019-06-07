import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaynoticeGraphComponent } from './daynotice-graph.component';

describe('DaynoticeGraphComponent', () => {
  let component: DaynoticeGraphComponent;
  let fixture: ComponentFixture<DaynoticeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaynoticeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaynoticeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
