import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList : User[]

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {

    this.dataService.findUsers().subscribe( user => this.userList = user);

  }

}
