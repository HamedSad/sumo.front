import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSupprComponent } from './sport-suppr.component';

describe('SportSupprComponent', () => {
  let component: SportSupprComponent;
  let fixture: ComponentFixture<SportSupprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportSupprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSupprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
