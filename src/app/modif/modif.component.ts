import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent implements OnInit {


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

