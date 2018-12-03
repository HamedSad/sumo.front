import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../model/commentaire';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.scss']
})
export class CommentaireListComponent implements OnInit {

  commentaireList : Commentaire[]

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.dataService.findCommentaire().subscribe( equipement => this.commentaireList = equipement);
   }

}
