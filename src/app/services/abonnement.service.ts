import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable,map } from 'rxjs';
import { env } from 'src/environments/env';
import { Abonnement } from '../models/type';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client'; 
@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  headers = new HttpHeaders().set('content-type', 'application/json');

  private currentUserSubject: BehaviorSubject<Abonnement>;

  //Injection de dependance du module httpClient
  //Qui permet de faire les requetes

  constructor(private httpClient:HttpClient , private router:Router , private socket: Socket) {
    //Recuperation du token au niveau du localstorage dès la creation de ce service
    //Stockage du token dans l'observable currentUserSubject

    this.currentUserSubject = new BehaviorSubject<Abonnement>(JSON.parse(localStorage.getItem('currentUser')!!));
  }

  //Creation de la methode get pour recuperer la valeur du token actuelle
  public get currentUserValue(): Abonnement {
    return this.currentUserSubject.value;
  }

  AddUtilisateur(data: Abonnement){ return this.httpClient.post<Abonnement>(`${env.apiUrl}/api/abonnement/`,data);
      
  }

  getUsers(): Observable<Abonnement[]> {
    return this.httpClient.get<Abonnement[]>(`${env.apiUrl}/api/abonnement/getAll`, {headers: this.headers});
  }

  Delete(id:string): Observable<Abonnement[]> {
    return this.httpClient.delete<Abonnement[]>(`${env.apiUrl}/api/abonnement/delete/id`, {headers: this.headers});
  } 
  
  restaure(id:string){}
  
 capteur(){
  return this.socket.fromEvent("capteur")
 }
}
