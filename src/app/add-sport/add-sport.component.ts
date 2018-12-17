import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport';
import { NgForm } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.scss']
})

export class AddSportComponent implements OnInit {

  sport: Sport = <Sport>{ nomSport: '', descriptionSport: '', urlImageSport: '', nomEquipement: '', saisonSport: '', reglesSport: '' };
  sportList: Sport[];


  constructor(private dataService: DataserviceService, private router: Router) {
  }

  onSubmit(form: NgForm) {
    this.sport.nomSport = form.value['nomSport'];
    this.sport.descriptionSport = form.value['descriptionSport'];
    this.sport.urlImageSport = form.value['urlImageSport'];
    this.sport.reglesSport = form.value['reglesSport'];
    this.sport.saisonSport = form.value['saisonSport'];
    this.sport.nomEquipement = form.value['nomEquipement'];
    this.dataService.addSport(this.sport).subscribe(sport => this.sportList.push(sport));
    this.router.navigate(['validation'])

    console.log(form.value)
  };

  ngOnInit() {
  }
}