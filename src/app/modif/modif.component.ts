import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent {


  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  errorSms:any;
  spin= false;
  verifPass:any = true;
  msg!: string;
  emailUser = localStorage.getItem('email')?.replace(/['"]+/g, '');


  constructor(private userService : UsersService, private formBuilder: FormBuilder ,private router: Router,) {
    this.registerForm = this.formBuilder.group({
    
      password:['',[Validators.required,]],
      password1:['',[Validators.required,]],
      password2:['',[Validators.required,]],
      
      }) 
      
    
  }
  
  ngOnInit() {
    
  
     

      
       
  }

  
onSubmit(){

this.submitted = true
this.spin = true

 if(this.registerForm.invalid){
  this.spin = false
  return ;

} 
console.log(this.registerForm.value);

/*  const user = {
  password: this.registerForm.value.password,
  newPassword: this.registerForm.value.password3

 } */

 const user={
  oldPassword: this.registerForm.value.password,
  newPassword: this.registerForm.value.password1,

}
console.log(user);

const Toast = Swal.mixin({
  toast: true,
  position: 'center-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const ids= localStorage.getItem('access_token')?.replace(/"/g, '');
const id = ids?.split(' ').join('')
console.log(id);

return this.userService.update(id,user).subscribe(

  res=>{
      console.log(res);
      this.msg= "Modification réussie avec succés";
      setTimeout(()=> {window.location.reload()}, 2000 );
     this.registerForm = this.formBuilder.group({
        password: [''],
        password1: [''],
        password2: [''],
      })

      Toast.fire({
        icon: 'success',
        title: `Mot de passe modifié avec succés`
      })

  }
)

}

checkPassword = () => {

  let pass1 = this.registerForm.value.password1//(<HTMLInputElement>document.getElementById("pass1")).value;
  let pass2 = this.registerForm.value.password2//(<HTMLInputElement>document.getElementById("pass2")).value;
/* 
  console.log(pass1 != pass2) */

  if (pass1 != pass2) {
    this.verifPass = false;
   

    setTimeout(() => { this.verifPass = true }, 3000);
  }
 
}

}


