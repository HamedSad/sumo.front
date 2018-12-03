import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Sport } from './model/sport';
import { Terrain} from './model/terrain';
import { Equipement } from './model/equipement';
import { Commentaire } from './model/commentaire';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(private httpClient: HttpClient) { }
  
//Methode permettant de selectionner un sport parmi ma liste
 public getSportById(idSport : number) : Observable <Sport>{
 return this.httpClient.get<Sport>('http://localhost:8080/api/sport/'+idSport);
 }

  public findUsers(): Observable <User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/api/user/all');
  }

  public findSport(): Observable <Sport[]>{
    return this.httpClient.get<Sport[]>('http://localhost:8080/api/sport/all');
  }

  public findTerrain(): Observable<Terrain[]>{
    return this.httpClient.get<Terrain[]>("http://localhost:8080/api/terrain/all");
  }

  public findEquipement() : Observable <Equipement[]>{
    return this.httpClient.get<Equipement[]>("http://localhost:8080/api/equipement/all");
  }

  public findCommentaire() : Observable <Commentaire[]>{
    return this.httpClient.get<Commentaire[]>('http://localhost:8080/api/commentaire/all');
  }

  public findEquipementById(id : number): Observable <Equipement>{
    return this.httpClient.get<Equipement>('http://localhost:8080/api/sport/ + id + /equipement');
  }


  public findCommentaireById(id : number) : Observable<Commentaire>{
    return this.httpClient.get<Commentaire>('http://localhost:8080/api/sport/ + id + /commentaire');
  }
  //Création de a méthode avec comme arguments name et date
  //public addCommentaire(){
   // this.httpClient.post('http://localhost:8080/api/commentaire.json', this.findCommentaire);
 // }

}