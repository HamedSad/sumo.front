import { Component, OnInit, Input } from '@angular/core';
import { Sport } from '../model/sport';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  @Input()id: number;

  sportList: Sport[];

  
  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    this.dataService.findSport().subscribe( sport => this.sportList = sport);
  }

}
