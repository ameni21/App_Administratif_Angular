import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean= false;

  constructor(private fireauth : AngularFireAuth,private router:Router){ }

  //login method
  login(email : string,password:string){
    this.isAuth=true;
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('user','true');
      this.router.navigate(['/dashbord']);
      this.isAuth= true;
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
      this.isAuth=false;
    })
  }

  

  //register method
  register(email : string , password : string){
    this.isAuth=false;
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=> {
      alert('register succssful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //sign out method 

  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }



}
