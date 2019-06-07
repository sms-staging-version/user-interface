import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeServiceComponent } from './fake-service.component';

describe('FakeServiceComponent', () => {
  let component: FakeServiceComponent;
  let fixture: ComponentFixture<FakeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
