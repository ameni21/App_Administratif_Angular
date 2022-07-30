import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../models/admin.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { getDatabase, ref, onValue, set, child, get} from "firebase/database";
import { FirebaseApp } from '@angular/fire/app';
import { getgid } from 'process';
import { idToken } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';








const baseUrl=environment.firebaseConfig.databaseURL;
const app = initializeApp(environment.firebaseConfig);
let db=getDatabase(app);
const dbRef = ref(db);



@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
   listAdmin = this.database.list('admin');
   adminId = getAuth(app).currentUser?.uid;

  constructor(private _http: HttpClient, private auth: AuthService, private database: AngularFireDatabase  ) { }
/*
  private async request(method: string, url: string, data?: any, responseType?: any) {
    const token = await this.auth.getAccessToken();

    console.log('request ' + JSON.stringify(data));
    const result = this._http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }
*/

getAdmin():Observable<SnapshotAction<unknown>[]>{
  
return this.listAdmin.snapshotChanges(['child_moved']);
  
}

   registerAdmin( admin :Admin):Observable<Admin>{
    console.log('createAdmin ' + JSON.stringify(admin));
    return this._http.post<Admin>(`${baseUrl}/admin/.json`,JSON.stringify(admin));
  }
  
     //console.log(`id adminnnnn: ${getAuth(app).currentUser?.uid}`);
     
    removeAdmin(id : string): Observable<SnapshotAction<unknown>[]>{
      return this.listAdmin.snapshotChanges(['child_removed']);
    }
  
    updateAdmin(id : string): Observable<SnapshotAction<unknown>[]>{
      return this.listAdmin.snapshotChanges(['child_changed']);
    }

    Add(id : string): Observable<SnapshotAction<unknown>[]>{
      return this.listAdmin.snapshotChanges(['child_added']);
    }


}

