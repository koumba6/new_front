import { Component, OnInit } from '@angular/core';
import profils from '../../modele/profil.json';

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
  
profils! :any;

  constructor(){}

  profil : DONNE[] = profils

  ngOnInit(): void {
    
  }


  logout(): void {
    
  }
}
