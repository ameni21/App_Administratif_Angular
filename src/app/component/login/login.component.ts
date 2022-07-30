import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AdminService } from 'src/app/shared/admin.service';
import { Admin } from 'src/app/models/admin.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  isAuth :  boolean= this.auth.isAuth;

  email : string ='';
  password : string = '';
  notification=0
  erreur=0;
  alertemailutulise=0
  adminModel : Admin= new Admin();
  verifEmail?: string ='';

  constructor(private auth : AuthService, private adminService :AdminService) { }

  ngOnInit(): void {
    this.isAuth = this.auth.isAuth;
  }
  
login(){
  this.isAuth = this.auth.isAuth;
  this.adminService.getAdmin().subscribe(actions => {
  actions.forEach(action => {
  
  if(action.payload.child('email').val()==this.email){
    this.auth.login(this.email,this.password);
  }else{

  }

    });
});

}

}
