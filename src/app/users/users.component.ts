import { Component, OnInit } from '@angular/core';
//import User from '../../modele/users.json';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../models/type';
import { AbonnementService } from '../services/abonnement.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  pages: number =1;
  searchText:any;
  arch:boolean=true;

  

  Abonnement!:any[];


  constructor(private abonnement:AbonnementService,  httpclient: HttpClient , private router:Router){}

  ngOnInit(): void {
   // this.getDonnees()
    // this.abonnement.getUsers().subscribe(
    //   (data) => {
    //    console.log(data);
    //    this.Abonnement = data;
    //   }
    //  )
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
  
        // this.abonnement.Delete(id).subscribe(()=>{
        //   Toast.fire({
        //     icon: 'success',
        //     title: `Archivé avec succés`
        //   })
        //   this.getDonnees()
        // })
      }
    })
  
    }
  
  
    archive(){}
}


