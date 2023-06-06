import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../models/admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  errorSms:any;
  spin= false;
  verifPass: any = true;
  invalid= false;
  errorMsg:any;
  donnee:any;
  
  email: any;
  msg: string | null =null ;

  constructor(private formBuilder: FormBuilder ,private authService: UsersService, private router:Router ){

  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      
      password:['',[Validators.required,Validators.minLength(6)]],
      
      })
  }
  onSubmit(){
    this.submitted = true
    this.spin = true

    const user:User ={
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }

    this.authService.getConnexion(user).subscribe(
      {
        next: res=>{
          console.log(res);
          //let infoConnexion = res;
          localStorage.setItem('access_token', res.token);
          this.router.navigateByUrl('sidebar');
          /* if(infoConnexion.data){
            
          } */
      },

      error: error =>{

        setTimeout(()=> {this.spin = false; this.errorSms = false;},2000)
        if(error) {
          this.msg = "Email ou mot de passe incorrect!";
          this.registerForm = this.formBuilder.group(
            {
              email: [''],
              password: [''],
            })

        }
        setTimeout(()=> {this.msg ='';},2000)
      }
      }
    )

  }

  }

