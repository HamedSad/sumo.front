import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/terrain';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-terrain-list',
  templateUrl: './terrain-list.component.html',
  styleUrls: ['./terrain-list.component.scss']
})
export class TerrainListComponent implements OnInit {

  terrainList : Terrain[]

  constructor(private dataService : DataserviceService) { }

  ngOnInit() {
    this.dataService.findTerrain().subscribe(terrain => this.terrainList = terrain);
  }

}