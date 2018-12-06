import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsParTerrainComponent } from './sports-par-terrain.component';

describe('SportsParTerrainComponent', () => {
  let component: SportsParTerrainComponent;
  let fixture: ComponentFixture<SportsParTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsParTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsParTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
