import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../model/sport';
import { SportComponent } from '../sport/sport.component';

@Component({
  selector: 'app-commentaire-add',
  templateUrl: './commentaire-add.component.html',
  styleUrls: ['./commentaire-add.component.scss']
})
export class CommentaireAddComponent implements OnInit {

  sport: Sport;
   

  //pour récuperer le fragment id on injecte ActivatedRoute dans lequel il y aura toutes les infos de la route active et de ce fragment
  constructor(private dataService: DataserviceService, 
            private route: ActivatedRoute) {
              }

  ngOnInit() {
  this.getOneSport();
  }

getOneSport() {
  const idSport = +this.route.snapshot.paramMap.get("id");
  this.dataService.getSportById(idSport).subscribe(sport => this.sport=sport);
}

}
