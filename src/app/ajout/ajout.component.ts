import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../models/type';
import { AbonnementService } from '../services/abonnement.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {


  registerForm!: FormGroup;
  title = 'angularvalidate';
  submitted = false;
  spin = false;
  invalid = false;
  typeOption = localStorage.getItem("type")
  type: any
  description: any
  prix: any
  abonnements: Abonnement[] = [];
 


  constructor(private formBuilder: FormBuilder, private httpclient: HttpClient, private abonnement: AbonnementService) {
 
  }
  ngOnInit(): void {
    if (this.typeOption == "princesse") {
      this.type = "princesse"
      this.description = "Accès limité au Lait"
      this.prix = "9.99"
    }
    if (this.typeOption == "khouss") {
      this.type = "khouss"
      this.description = "Accès limité au café"
      this.prix = "19.99"
    }
    if (this.typeOption == "xeweul") {
      this.type = "xeweul"
      this.description = "Accès complet pour toute la fontaine "
      this.prix = "99.99"
    }
    this.registerForm = this.formBuilder.group({

      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prix: [this.prix, [Validators.required,]],
      codeacces: ['', [Validators.required,]],
      type: [this.type, [Validators.required,]],
      description: [this.description, [Validators.required,]]
    })
    console.log(this.type);
  }

  
  onSubmit() {
    const user:Abonnement ={
      prenom: this.registerForm.value.prenom,
      nom: this.registerForm.value.nom,
      prix: this.registerForm.value.prix,
      codeacces: this.registerForm.value.codeacces,
      type: this.registerForm.value.type,
      description: this.registerForm.value.description
    }

    this.submitted = true
    this.spin = true
    this.abonnement.AddUtilisateur(user).subscribe(
      {
        next: (res: any)=>{
          console.log(res);
        }
      }
    ) 
  }

}