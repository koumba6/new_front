import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Abonnement } from '../services/abonnement.service';
import { AbonnementType } from '../models/type';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Socket } from 'ngx-socket-io';
//import { BehaviorSubject,Observable,map } from 'rxjs';
import { io } from 'socket.io-client';
import { env } from 'src/environments/env';
import { User } from '../models/admin';

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
  liquidHeight1: number = 70;
  donnee!:any
  liquidHeight2: number = 20;
  
  spin = false;
  liquidHeight3: number = 30;
  //localStatus = localStorage.getItem('currentUser');
   AbonnementType!: any[];
  signupError: string | null = null;
  id: string = ''
  //sock: Socket  ;
 pages = 1;
  getId: any;
  registerForm!: FormGroup;
  submitted = false;
  tabOn = true;
code: any;
  
  constructor(private formBuilder: FormBuilder, private httpclient: HttpClient, private router: Router,private userservice:UsersService, private abonnement:Abonnement) {
    //naviguer

   
   

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

  ngOnInit() {

    
    this.abonnement.capteur().subscribe((data:any)=>{
      console.log(data);
      this.donnee  = data;
    
    })
    this.getDonnees()
    this.abonnement.abonnementservice().subscribe((data: any[])=>{
      
        console.log(data);
        this.AbonnementType = data;
  

    })
    this.registerForm = this.formBuilder.group({
    
      prenom:['',[Validators.required,]],
      nom:['',[Validators.required]],
      type:['',[Validators.required]],
      /* code:['',[Validators.required,Validators.maxLength(4)]], */
      code: ['', [Validators.required, Validators.maxLength(4)]],

      solde:['',[Validators.required]],
      abonnementType:['',[Validators.required]],
      
      })

  }

  getDonnees = () => {

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

  

  Ajoute(id:any, prix:any, type:any){
    this.registerForm = this.formBuilder.group({
    
      prenom:['',[Validators.required,]],
      nom:['',[Validators.required]],
      code:['',[Validators.required]],
      type:[type,[Validators.required]],
      solde:[prix,[Validators.required]],
      abonnementType:[id],
      
      })
    
  }

  onSubmit() {

    this.submitted = true
    this.spin = true

    const user:User ={
      prenom: this.registerForm.value.prenom,
      nom: this.registerForm.value.nom,
      solde: this.registerForm.value.solde,
      code: this.registerForm.value.code,
      abonnementType: this.registerForm.value.abonnementType,
      type: this.registerForm.value.type
    }
      
    this.abonnement.AddUtilisateur(user).subscribe(

      (user)=>{
        console.log(user);

      }
    )
    
  }




}





/* pages: number =1;
  searchText:any;
  arch:boolean=true;

  

  User!:any[];


  constructor(private abonnement:Abonnement,  httpclient: HttpClient , private router:Router){}

  ngOnInit(): void {
    this.getDonnees()
     this.abonnement.getUsers().subscribe(
       (data) => {
        console.log(data);
        this.User = data;
       }
     )
  }
 
  getDonnees = () => {

  }
  
  
  
   onSubmit() {
    
  
  
   }
  
   delete(id: string) {

    Swal.fire({
      title: 'Voulez-vous vraiment archiver cet utilisateur?',
      icon: 'warning',
      confirmButtonColor: "#B82010",
      cancelButtonColor: "green" ,
      showCancelButton: true,
      confirmButtonText: 'oui!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if(result.isConfirmed){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
  
        
      }
    })
  
    }
  
  
    archive(){}
}


 */