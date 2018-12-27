import { Component, OnInit, NgModule } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { SportComponent } from '../sport/sport.component';
import { CommentaireListComponent } from '../commentaire-list/commentaire-list.component';
import { Sport } from '../model/sport';

@Component({
  selector: 'app-sport-suppr',
  templateUrl: './sport-suppr.component.html',
  styleUrls: ['./sport-suppr.component.scss']
})

@NgModule({
  declarations: [SportComponent, CommentaireListComponent]
})

export class SportSupprComponent implements OnInit {

  sport: Sport;
  sportList : Sport[];

  constructor(private dataservice: DataserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneSport();
  }

  getOneSport() {
    const idCommentaire = +this.route.snapshot.paramMap.get("id");
    this.dataservice.getSportById(idCommentaire).subscribe(sport => this.sport = sport);
  }

  onSubmit(){
    const idSport = +this.route.snapshot.paramMap.get("id");
    this.dataservice.deleteSportById(idSport).subscribe(sport =>this.sport = sport)
  }
}