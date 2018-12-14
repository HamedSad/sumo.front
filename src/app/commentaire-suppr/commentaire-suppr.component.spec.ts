import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireSupprComponent } from './commentaire-suppr.component';

describe('CommentaireSupprComponent', () => {
  let component: CommentaireSupprComponent;
  let fixture: ComponentFixture<CommentaireSupprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireSupprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireSupprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
