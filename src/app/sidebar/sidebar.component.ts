import { Component, OnInit } from '@angular/core';
import profils from '../../modele/profil.json';
import { Router } from '@angular/router';
import { User } from '../models/admin';
import { UsersService } from '../services/users.service';
 
interface DONNE {
  prenom:string;
  nom:string;
  matricule:string

}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  
  test=true

  users:boolean=false;
  dash:boolean=true;
  modife:boolean=false;
  ajouter:boolean=false

  profils! :any;

  liquidHeight1: number = 70; 

  liquidHeight2: number = 30;
  
  liquidHeight3: number = 50; 

  constructor(private router: Router ,private userService: UsersService){}



  profil : DONNE[] = profils

  ngOnInit(): void {
    console.log(this.users === true);
    
  }

afficherUser(){
// this.users=true;
// console.log(this.users);
// this.users ? this.users=false : this.users=true
this.users=true
this.dash=false;
this.ajouter=false;
this.modife=false;

};

cacher(){
this.users=false; 
this.dash=true;
this.modife=true;
this.ajouter=false;
}

modif(){
  this.users=false;
  this.dash=false;
  this.ajouter=false;
  this.modife=true;
};
ajoute(){
this.users=false;
this.dash=false;
this.ajouter=true;
this.modife=false;

}


  logout(): void {
    this.userService.Logout()
  }
  
  
}
