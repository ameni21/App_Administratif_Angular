import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  adminArray : Array<Admin>= new Array;
  admin: Admin=new Admin()  

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    
    this.adminService.getAdmin().subscribe(
       action =>{
         
         action.forEach(
           action =>{
            //this.adminArray.push(this.admin);
            this.admin= new Admin();
      
             this.admin.email = action.payload.child('email').val();
             this.admin.nom = action.payload.child('nom').val();
             this.admin.prenom = action.payload.child('prenom').val();
             this.adminArray.push(this.admin);
             
             
           }
         )
         
       }
    )
  }

}
