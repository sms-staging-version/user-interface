import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMan2CohortComponent } from './sub-man2-cohort.component';

describe('SubMan2CohortComponent', () => {
  let component: SubMan2CohortComponent;
  let fixture: ComponentFixture<SubMan2CohortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMan2CohortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMan2CohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
