import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainListComponent } from './terrain-list.component';

describe('TerrainListComponent', () => {
  let component: TerrainListComponent;
  let fixture: ComponentFixture<TerrainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
