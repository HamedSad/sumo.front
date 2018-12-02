import { Component, OnInit } from '@angular/core';
import { Equipement } from '../model/equipement';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.scss']
})
export class EquipementListComponent implements OnInit {

  equipementList : Equipement[];

  constructor(private dataservice : DataserviceService) { }

  ngOnInit() {
   this.dataservice.findEquipement().subscribe( equipement => this.equipementList = equipement);
  }

}
