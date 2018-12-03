import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireAddComponent } from './commentaire-add.component';

describe('CommentaireAddComponent', () => {
  let component: CommentaireAddComponent;
  let fixture: ComponentFixture<CommentaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
