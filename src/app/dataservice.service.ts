import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Sport } from './model/sport';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(private httpClient: HttpClient) { }
  

 public getSportById(idSport : number) : Observable <Sport>{
 return this.httpClient.get<Sport>('http://localhost:8080/api/sport/'+idSport);
 }

  public findUsers(): Observable <User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/api/user/all');
  }

  public findSport(): Observable <Sport[]>{
    return this.httpClient.get<Sport[]>('http://localhost:8080/api/sport/all');
  }

}