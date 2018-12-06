import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/terrain';
import { DataserviceService } from '../services/dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports-par-terrain',
  templateUrl: './sports-par-terrain.component.html',
  styleUrls: ['./sports-par-terrain.component.scss']
})
export class SportsParTerrainComponent implements OnInit {

  SportsByTerrain : Terrain[];

  constructor(private dataService: DataserviceService, private route:ActivatedRoute) { }

  ngOnInit(){}

 /* ngOnInit() {
    this.getOneTerrain();
  }

  getOneTerrain(){
    const idTerrain = +this.route.snapshot.paramMap.get("id");
    this.dataService.findSportsByTerrain(idTerrain).subscribe(sport => this.SportsByTerrain = sport);
  }*/

}