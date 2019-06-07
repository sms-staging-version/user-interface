import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngrSubAssociatesComponent } from './mngr-sub-associates.component';

describe('MngrSubAssociatesComponent', () => {
  let component: MngrSubAssociatesComponent;
  let fixture: ComponentFixture<MngrSubAssociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngrSubAssociatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngrSubAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
