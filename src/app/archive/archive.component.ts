import { Component, OnInit } from '@angular/core';
import User from '../../modele/users.json';


interface donne {
  
  prenom:string;
  nom:string;
  
  montant:string;
  solde:string

}
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit{
pages: number=1;  
searchText:any;

constructor(){}
users: donne[] = User;

ngOnInit(): void {
  
}

restaurer(id: string){

}
}
