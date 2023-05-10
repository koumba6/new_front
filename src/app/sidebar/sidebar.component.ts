import { Component, OnInit } from '@angular/core';
import profils from '../../modele/profil.json';
import { Router } from '@angular/router';

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

  profils! :any;

  liquidHeight1: number = 70; 

  liquidHeight2: number = 30;
  
  liquidHeight3: number = 50; 

  constructor(private router: Router){}



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
this.modife=false;
};

cacher(){
this.users=false; 
this.dash=true;
this.modife=true;
}

modif(){
  this.users=false;
  this.dash=false;
  this.modife=true;
};

  logout(): void {
    
  }
}
