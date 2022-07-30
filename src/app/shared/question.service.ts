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
import { database } from 'firebase-admin';
import { Question } from '../models/question';




const baseUrl=environment.firebaseConfig.databaseURL;
const app = initializeApp(environment.firebaseConfig);
let db=getDatabase(app);
const dbRef = ref(db);

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  listQuestion = this.database.list('questions');
   

  constructor(private _http: HttpClient, private auth: AuthService, private database: AngularFireDatabase) { }


  getQuestion():Observable<SnapshotAction<unknown>[]>{
  
    return this.listQuestion.snapshotChanges(['child_moved']);
      
    }
    
       registeruestion( question :Question):Observable<Question>{
        console.log('createAdmin ' + JSON.stringify(question));
        return this._http.post<Admin>(`${baseUrl}/admin/.json`,JSON.stringify(question));
      }
      
         //console.log(`id adminnnnn: ${getAuth(app).currentUser?.uid}`);
         
        removeuestion(id : string): Observable<SnapshotAction<unknown>[]>{
          return this.listQuestion.snapshotChanges(['child_removed']);
        }
      
        updateuestion(id : string): Observable<SnapshotAction<unknown>[]>{
          return this.listQuestion.snapshotChanges(['child_changed']);
        }
    
        Adduestion(id : string): Observable<SnapshotAction<unknown>[]>{
          return this.listQuestion.snapshotChanges(['child_added']);
        }
}
