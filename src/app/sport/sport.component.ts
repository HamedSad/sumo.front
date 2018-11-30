import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Sport } from '../model/sport';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})



export class SportComponent implements OnInit {

  @Input() idSport: number;
  @Input() nomSport: string;
  @Input() reglesSport: string;

  //Creation d'une propriete sportList de type Sport array
  sportList: Sport[];

  //creation d'un constructeur 
  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.dataService.findSport().subscribe(sportList => this.sportList = sportList);

  }

}
