import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { ListUsersComponent } from './component/list-users/list-users.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {MatDialogModule} from '@angular/material/dialog';
 import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { MenuComponent } from './component/menu/menu.component';
import { AdminService } from './shared/admin.service';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import { QuestionComponent } from './component/question/question.component';
import { ImagesComponent } from './component/images/images.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesService } from './shared/categories.service';
import { QuestionService } from './shared/question.service';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListUsersComponent,
    DashbordComponent,
    ResetPasswordComponent,
    MenuComponent,
    ListAdminComponent,
    QuestionComponent,
    ImagesComponent,
    CategoriesComponent,
    
    
    
   
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
     // * MATERIAL IMPORTS
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    
    
    
   
    
  ],
 
  providers: [
    AuthService,
    AdminService,
    UserService,
    CategoriesService,
    QuestionService,
    AuthGuard,
    
  ],
  bootstrap: [
    AppComponent,
    ListUsersComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent
  ],
  exports: [RouterModule],

})
export class AppModule { }
