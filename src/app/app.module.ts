import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiviteComponent } from './activite/activite.component';
import { UserListComponent } from './user-list/user-list.component';
import { SportComponent } from './sport/sport.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EquipementComponent } from './equipement/equipement.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { SingleSportComponent } from './single-sport/single-sport.component';


//Création d'une constante appRoutes qui sera de type route
const appRoutes: Routes = [
  { path : 'sport', component : SportComponent},
  { path : 'sport/:id', component : SingleSportComponent},
  { path : 'user', component : UserListComponent},
  //{ path : 'accueil', component : AccueilComponent},
  { path : 'auth', component : AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActiviteComponent,
    UserListComponent,
    SportComponent,
    AccueilComponent,
    EquipementComponent,
    AuthComponent,
    SingleSportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
  ],

  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
