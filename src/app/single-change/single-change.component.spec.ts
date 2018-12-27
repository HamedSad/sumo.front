import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChangeComponent } from './single-change.component';

describe('SingleChangeComponent', () => {
  let component: SingleChangeComponent;
  let fixture: ComponentFixture<SingleChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
