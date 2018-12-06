import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/commentaire';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.scss']
})

export class CommentaireListComponent implements OnInit {

  commentaireList : Commentaire[]

  constructor(private dataService: DataserviceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getOneSport();
   }

getOneSport() {
const idSport = +this.route.snapshot.paramMap.get("id");
this.dataService.findCommentaireBySport(idSport).subscribe(commentaire => this.commentaireList = commentaire );

  }
}