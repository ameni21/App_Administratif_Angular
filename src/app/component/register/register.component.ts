import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/shared/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  isAuth :  boolean= this.auth.isAuth;
  
  nom : string = "";
  prenom : string = "";
  email : string ='';
  password : string = '';
  confPassword : String = '';
  adminModel : Admin= new Admin();
  app = initializeApp(environment.firebaseConfig);
  


  erreur=0;
  notification=0;

  constructor(private auth : AuthService, private adminService :AdminService) { }

  
 ngOnInit():void{
  this.isAuth = this.auth.isAuth;
 }

  
 
  

  register(formRegistration:NgForm){
    this.isAuth = this.auth.isAuth;
    this.adminModel=formRegistration.value
   
    this.auth.register(this.email,this.password);
  
    this.adminService.registerAdmin(this.adminModel).subscribe({
      next: (response:Admin) => {
        this.adminModel=response;
        this.notification=1;
      },
      error: (error:HttpErrorResponse) => {
        this.erreur=1
        alert(error.message)
       },
      complete: () => console.info('complete') 
      
    })
    
   
    this.email = '';
    this.password = '';
    this.nom= '';
    this.prenom = '';
    this.confPassword = '';
  }

}
