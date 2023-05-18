import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbonnementService } from '../services/abonnement.service';
import { Abonnement } from '../models/type';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Socket } from 'ngx-socket-io';
//import { BehaviorSubject,Observable,map } from 'rxjs';
import { io } from 'socket.io-client';
import { env } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  socket:any;
  liquidHeight1: number = 20;

  liquidHeight2: number = 30;

  liquidHeight3: number = 50;
  localStatus = localStorage.getItem('currentUser');
  Abonnement: Abonnement[] = [];
  signupError: string | null = null;
  id: string = ''
  //sock: Socket  ;

  getId: any;
  registerForm!: FormGroup;
  submitted = false;
  tabOn = true;
  formBuilder: any;
  constructor(private builder: FormBuilder, private httpclient: HttpClient, private router: Router,private userservice:UsersService, private abonnement:AbonnementService) {
    //naviguer

    this.registerForm = this.builder.group({
      prenom: ['', [Validators.required, this.noWhitespaceValidator]],
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      codeacces: ['', [Validators.required, this.noWhitespaceValidator]],

    });
    // this.socket.capteur().subscribe((data)=>{
    //   console.log(data);
      
    // })

  }
 

  setupSocketConnection() {
    this.socket= io(`${env.apiUrl}`);

    this.socket.on( (data: any) => {
      console.log(data );
       
      
    }); 
  }
  getLum(){
    this.socket = io(`${env.apiUrl}`);
    this.socket.on('capteur', (data: any) => {
      console.log('capteur '+data);
      return data
    });
  }


  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  ngOnInit(): void {
    this.abonnement.capteur().subscribe((data:any)=>{
      console.log(data);
      
    })
  }
  ajout(type: any) {
    if (type == 1) {
      /*   localStorage.removeItem('type') */
      localStorage.setItem('type', "princesse")
    }
    if (type == 2) {
      /*    localStorage.removeItem('type') */
      localStorage.setItem('type', "khouss")
    }
    if (type == 3) {
      /*    localStorage.removeItem('type') */
      localStorage.setItem('type', "xeweul")

    }
  }








  /*  changeRole = (id: string) => {
     this.userService.changerRole(id).subscribe(()=> {
       this.getDonnees()
     })
 
  }; */



  onSubmit() {
    this.registerForm.setValue({
      prenom: [''],
      nom: [''],
      codeacces: [''],
    });


  }






}





