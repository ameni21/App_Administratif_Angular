import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashbordComponent } from './component/dashbord/dashbord.component'
import { MenuComponent } from './component/menu/menu.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import { QuestionComponent } from './component/question/question.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: '', redirectTo :'login', pathMatch: 'full'},
  {path: 'resetPassword',canActivate:[AuthGuard], component: ResetPasswordComponent},
  {path: '',component:MenuComponent, children:[
    {path: 'register' , component : RegisterComponent},
    {path: 'users' , component : ListUsersComponent},
    {path: 'dashbord',canActivate:[AuthGuard], component:DashbordComponent},  
    {path: 'admins', component: ListAdminComponent},
    {path: 'questions' , component : QuestionComponent}
  ]},
  
  


  //  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
