import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  user : User  = <User>{nomUser: '', prenomUser: '',emailUser : '', passwordUser: '', passwordUser2 : ''};
  userList : User[];

  constructor(private dataService : DataserviceService, private router : Router) { 
  }

  onSubmit(form : NgForm){

    this.user.nomUser = form.value['nomUser'];
    this.user.prenomUser = form.value['prenomUser'];
    this.user.emailUser = form.value['emailUser'];
    this.user.passwordUser = form.value['passwordUser'];
    this.user.passwordUser2 = form.value['passwordUser2']; 
    this.dataService.addUser(this.user).subscribe(user => this.userList.push(user));
    this.router.navigate(['/sport']);
    
    console.log(form.value);

  }

  ngOnInit() {

  }
}
