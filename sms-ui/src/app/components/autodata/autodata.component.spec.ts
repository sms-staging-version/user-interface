import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodataComponent } from './autodata.component';

describe('AutodataComponent', () => {
  let component: AutodataComponent;
  let fixture: ComponentFixture<AutodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
