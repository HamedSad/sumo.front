import { Component, OnInit, Inject } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../model/sport';


@Component({
  selector: 'app-single-sport',
  templateUrl: './single-sport.component.html',
  styleUrls: ['./single-sport.component.scss']
})
export class SingleSportComponent {

  //Noms arbitraires donnés à règlesSport et nomSport  
   reglesSport : string = 'Regle';
   nomSport : string = 'Nom';
   idSport : BigInteger;

  //pour récuperer le fragment id on injecte ActivatedRoute dans lequel il y aura toutes les infos de la route active et de ce fragment
  constructor(private dataService: DataserviceService, 
            private route: ActivatedRoute) { }
 

  ngOnInit() {
   this.route.snapshot.params['id'];
  // this.nomSport = this.dataService.getSportById(this.idSport);
   //this.reglesSport = this.dataService.getSportById(this.idSport);
  }

}
