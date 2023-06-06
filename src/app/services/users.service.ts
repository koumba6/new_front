import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
//import { env } from 'src/environments/env';
import { User } from '../models/admin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   //Creation de l'objet behavior subject qui require une valeeur initiale ici de type utilisateur
  //Permet d'emettre la valeur actuel lorsqu'on s'abonne à l'observable BehaviorSubject
  private currentUserSubject: BehaviorSubject<User>;

  //Injection de dependance du module httpClient
  //Qui permet de faire les requetes

  constructor(private httpClient:HttpClient , private router:Router) {
    //Recuperation du token au niveau du localstorage dès la creation de ce service
    //Stockage du token dans l'observable currentUserSubject

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!!));
  }

  //Creation de la methode get pour recuperer la valeur du token actuelle
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

    //Connexion de l'utilisateur

  getConnexion(users:User){
    return this.httpClient.post<any>(`http://localhost:3000/api/login`,users).
      pipe(map(users => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //Ceci permet de garder l'utilisateur connecté entre les differentes pages
        //localStorage.setItem('access_token', users.token);
        localStorage.setItem('id', users.userId);
        localStorage.setItem('email', users.email);

        //this.currentUserSubject.next(users);
        return users;
      }));

  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  
  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return authToken !== null && authToken !== undefined ? true : false;
  }

   update(id:any,users:any){
    return this.httpClient.patch<User>(`http://localhost:3000/api/update/${id}`,users)
  } 


  Logout(){
    localStorage.clear();
      this.router.navigate(['/']);
    
  }
  capteur(){
    // return this.socket.fromEvent("capteur")
  } 

}