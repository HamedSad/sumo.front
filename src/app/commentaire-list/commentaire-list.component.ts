import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { Sport } from '../model/sport';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-commentaire-list',
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.scss']
})

export class CommentaireListComponent implements OnInit {

  commentaire : Commentaire = <Commentaire> {texteCommentaire:''}
  commentaireList : Commentaire[];
  idSport : Sport;

  constructor(private dataService: DataserviceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.getOneSport();
   }

getOneSport() {
const idSport = +this.route.snapshot.paramMap.get("id");
this.dataService.findCommentaireBySport(idSport).subscribe(commentaire => this.commentaireList = commentaire );}

onSubmit(form : NgForm){
  const idSport = +this.route.snapshot.paramMap.get("id");
  this.commentaire.texteCommentaire = form.value['texteCommentaire'];
  this.dataService.saveCommentBySport(idSport, this.commentaire).subscribe(commentaire => this.commentaireList.push(commentaire));
  console.log(form.value);
  }
}