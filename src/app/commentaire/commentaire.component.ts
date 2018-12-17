import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../model/commentaire';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  commentaireList: Commentaire[];

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.dataservice.findCommentaire().subscribe(commentaire => this.commentaireList = commentaire);
  }

}
