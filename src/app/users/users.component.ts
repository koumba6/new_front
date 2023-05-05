import { Component, OnInit } from '@angular/core';
import User from '../../modele/users.json';
import Swal from 'sweetalert2';


interface donne {
  
  prenom:string;
  nom:string;
  
  montant:string;
  solde:string

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  pages: number =1;
  searchText:any;
  constructor (){}

  users : donne[] = User;

  ngOnInit(): void {
    
  }
 


  recupereDonne(id: any,prenom: any,nom: any,codeacces: any,montant:any,solde:any){
    Swal.fire({
      title: 'Voulez-vous vraiment modifier cet utilisateur?',
      icon: 'warning',
      confirmButtonColor: "#B82010",
      cancelButtonColor: "green" ,
      showCancelButton: true,
      confirmButtonText: 'oui!',
      cancelButtonText: 'Annuler',
  
    })
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
  
    /* modifier(){
      if(!this.registerForm.valid){
        return
      }
      const id = this.id
      console.log(this.registerForm.value)
      this.userService.update(id,this.registerForm.value).subscribe(()=> {
        this.getDonnees()
  
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
  
      this.userService.update(id,this.registerForm.value).subscribe({
        next: (user) => {
  
          Toast.fire({
            icon: 'success',
            title: ` modifié avec succés`
          })
  
          setTimeout(() => {
            this.tabOn = true
          }, 3500)
        },
        error: (err) => {
          this.signupError = err.error.message
          setTimeout(() => {
            this.signupError = null;
          }, 5000)
        },
        complete: () => console.log("complete")
      })
  
    } */
}


