import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/shared/user.service';
import { Observable,interval } from 'rxjs';
import { User } from 'src/app/models/user.model';





@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements AfterViewInit,OnInit {

  displayedColumns: string[] = ['id', 'Email', 'Nom Parent', 'Nom enfant'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog :MatDialog,private api :UserService) {
  }

  userArray : Array<User>= new Array;
  user: User=new User()
  
  searchText: string = "";

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 

  ngOnInit():void {
    this.api.getUsers().subscribe(
      list=>{
        list.forEach(
          (action)=>{
            this.user = new User();
            this.user.email=action.payload.doc.data().email;
            this.user.id = action.payload.doc.id;
            this.user.enfant = action.payload.doc.data().enfant;
            this.user.parent =  action.payload.doc.data().parent;
            this.userArray.push(this.user)
          
          },
          
          
        );
       
        
        
      }
    );
    
  }

  
  edit(){

  }

  onDelete(){/*
    return {$key:item.payload.doc.id,
      ...item.payload.doc.data()} */
  }
  

  
 

}
