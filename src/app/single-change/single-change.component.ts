import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../model/sport';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-single-change',
  templateUrl: './single-change.component.html',
  styleUrls: ['./single-change.component.scss']
})
export class SingleChangeComponent implements OnInit {

  
  sport: Sport = <Sport>{ nomSport: '', descriptionSport: '', urlImageSport: '', nomEquipement: '', saisonSport: '', reglesSport: '' };
  sportList: Sport[];

  //pour récuperer le fragment id on injecte ActivatedRoute dans lequel il y aura toutes les infos de la route active et de ce fragment
  constructor(private dataService: DataserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneSport();
  }

  getOneSport() {
    const idSport = +this.route.snapshot.paramMap.get("id");
    this.dataService.getSportById(idSport).subscribe(sport => this.sport = sport);
  }

  onSubmit(form : NgForm) {
    const idSport = +this.route.snapshot.paramMap.get("id");


    this.dataService.updateSport(idSport, this.sport).subscribe(sport => this.sportList.push(sport)); 

    console.log(form.value);
  }
}
