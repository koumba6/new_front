import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  spin = false;
  invalid = false;


  constructor(private formBuilder: FormBuilder ){

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
  }
}
