import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { env } from 'src/environments/env';
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
    return this.httpClient.post<User>(`${env.apiUrl}/api/login`,users).
      pipe(map(users => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //Ceci permet de garder l'utilisateur connecté entre les differentes pages
        localStorage.setItem('currentUser', JSON.stringify(users.data?.token));
        localStorage.setItem('id', JSON.stringify(users.data?.userId));

        this.currentUserSubject.next(users);
        return users;
      }));

  }

   update(id:any,users:any){
    return this.httpClient.patch<User>(`${env.apiUrl}/api/update/${id}`,users)
  } 


  Logout(){
    let removeToken = localStorage.removeItem('access_token');
    let removeConnectedUser = localStorage.removeItem('connectedUser');
    if (removeToken == null && removeConnectedUser == null) {
      this.router.navigate(['/']);
    }
  }
  capteur(){
    // return this.socket.fromEvent("capteur")
  } 
}