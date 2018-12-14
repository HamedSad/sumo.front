import { Component, OnInit, NgModule } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { SportComponent } from '../sport/sport.component';
import { CommentaireListComponent } from '../commentaire-list/commentaire-list.component';


@Component({
  selector: 'app-commentaire-suppr',
  templateUrl: './commentaire-suppr.component.html',
  styleUrls: ['./commentaire-suppr.component.scss']
})


@NgModule({
  declarations: [SportComponent, CommentaireListComponent]
})

export class CommentaireSupprComponent implements OnInit {

  commentaire: Commentaire;
  commentaireList : Commentaire[];

  constructor(private dataservice: DataserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneComment();
  }

  getOneComment() {
    const idCommentaire = +this.route.snapshot.paramMap.get("id");
    this.dataservice.findCommentaireById(idCommentaire).subscribe(commentaire => this.commentaire = commentaire);
  }

  onSubmit(){
    const idCommentaire = +this.route.snapshot.paramMap.get("id");
    this.dataservice.deleteCommentById(idCommentaire).subscribe(commentaire =>this.commentaire = commentaire)
  }

}
