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
  
//Obtenir un sport dans ma liste
 public getSportById(idSport : number) : Observable <Sport>{
 return this.httpClient.get<Sport>('http://localhost:8080/api/sport/'+idSport);
 }

 //Obtenir la liste de tous les users
  public findUsers(): Observable <User[]>{
    return this.httpClient.get<User[]>('http://localhost:8080/api/user/all');
  }

  //Obtenir la liste de tous les sports
  public findSport(): Observable <Sport[]>{
    return this.httpClient.get<Sport[]>('http://localhost:8080/api/sport/all');
  }

  //Obtenir la liste de tous les terrains
  public findTerrain(): Observable<Terrain[]>{
    return this.httpClient.get<Terrain[]>("http://localhost:8080/api/terrain/all");
  }

  //Obtenir la liste de tous les équipements
  public findEquipement() : Observable <Equipement[]>{
    return this.httpClient.get<Equipement[]>("http://localhost:8080/api/equipement/all");
  }

  //Obtenir tous les commentaires
  public findCommentaire() : Observable <Commentaire[]>{
    return this.httpClient.get<Commentaire[]>('http://localhost:8080/api/commentaire/all');
  }


//Obtenir tous les commentaires d'un sport
  public findCommentaireBySport(id : number) : Observable <Commentaire[]>{
    return this.httpClient.get<Commentaire[]>('http://localhost:8080/api/sport/commentaire/'+ id);
  }


//Obtenir tous les équipements d'un sport
  public findEquipementBySport(id : number): Observable <Equipement>{
    return this.httpClient.get<Equipement>('http://localhost:8080/api/equipement/sport/' + id );
  }

//Obtenir la liste des sports pratiqués sur un terrain
  public findSportsByTerrain(idTerrain : number): Observable<Sport[]>{
    return this.httpClient.get<Sport[]>('http://localhost:8080/api/terrain/sport' + idTerrain);
  }

//Création de méthode pour ajouter un user
  public addUser(user: User) : Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/api/user', user);
  }

//Création d'un nouveau sport
  public addSport(sport : Sport) : Observable<Sport>{
      return this.httpClient.post<Sport>('http://localhost:8080/api/sport/add-sport', sport);
  }

//Suppression d'un sport en fonction de son Id
  public deleteSportById(idSport : number) : Observable <Sport>{
    return this.httpClient.delete<Sport>('http://localhost:8080/api/sport/' + idSport)
  }
}