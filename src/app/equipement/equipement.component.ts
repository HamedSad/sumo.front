import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Equipement } from '../model/equipement';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})

export class EquipementComponent implements OnInit {

  equipementSport: Equipement;

  //pour récuperer le fragment id on injecte ActivatedRoute dans lequel il y aura toutes les infos de la route active et de ce fragment
  constructor(private dataService: DataserviceService, private route: ActivatedRoute) {}

ngOnInit() {
this.getOneSport();
}

getOneSport() {
const idSport = +this.route.snapshot.paramMap.get("id");
this.dataService.findEquipementBySport(idSport).subscribe(equipement => this.equipementSport = equipement);
  }
}