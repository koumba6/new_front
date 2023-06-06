import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable,map } from 'rxjs';
//import { env } from 'src/environments/env';
import {AbonnementType} from '../models/type';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client'; 
import { User } from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class Abonnement {
  headers = new HttpHeaders().set('content-type', 'application/json');

  private currentUserSubject: BehaviorSubject<User>;

  //Injection de dependance du module httpClient
  //Qui permet de faire les requetes

  constructor(private httpClient:HttpClient , private router:Router , private socket: Socket) {
    //Recuperation du token au niveau du localstorage dès la creation de ce service
    //Stockage du token dans l'observable currentUserSubject

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!!));
  }

  //Creation de la methode get pour recuperer la valeur du token actuelle
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  AddUtilisateur(data: User){ return this.httpClient.post<User>(`http://localhost:3000/api/user/`,data);
      
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:3000/api/getAll`, {headers: this.headers});
  }

  Delete(id:string): Observable<User[]> {
    return this.httpClient.delete<User[]>(`http://localhost:3000/api/User/delete/id`, {headers: this.headers});
  } 
  
  
  abonnementservice(): Observable<AbonnementType[]> {
    return this.httpClient.get<AbonnementType[]>(`http://localhost:3000/api/abonnement/getAll`, {headers: this.headers});
  } 
  

 capteur(){
  return this.socket.fromEvent("capteur")
 }
}
