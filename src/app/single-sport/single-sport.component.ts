import { Component, OnInit, Inject, NgModule, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../model/sport';
import { SportComponent } from '../sport/sport.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-single-sport',
  templateUrl: './single-sport.component.html',
  styleUrls: ['./single-sport.component.scss'],
 
})

@NgModule({
  declarations: [SportComponent]
})
export class SingleSportComponent implements OnInit {

  sport: Sport;
   

  //pour récuperer le fragment id on injecte ActivatedRoute dans lequel il y aura toutes les infos de la route active et de ce fragment
  constructor(private dataService: DataserviceService, private route: ActivatedRoute) {}

  ngOnInit() {
  this.getOneSport();
  }

getOneSport() {
  const idSport = +this.route.snapshot.paramMap.get("id");
   
  this.dataService.getSportById(idSport).subscribe(sport => this.sport = sport);
  this.dataService.deleteSportById(idSport).subscribe(sport => this.sport = sport);
  //this.router.navigate(['/sport']);
  }

}