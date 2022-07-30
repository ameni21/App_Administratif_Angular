import { Injectable } from '@angular/core';
import { 
  Firestore,
   collection,
   collectionChanges,
   CollectionReference, 
   getDocs, 
   query, 
   collectionData} from '@angular/fire/firestore';
import { where } from 'firebase/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { QuerySnapshot } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public itemsCollection: AngularFirestoreCollection<User>;
  public items: Observable<User[]>;
  

  constructor( public firestore: Firestore,private afs: AngularFirestore ) {
    this.itemsCollection = afs.collection<User>('users');
    this.items = this.itemsCollection.valueChanges();
  }

  getUsers(){
       return this.itemsCollection.snapshotChanges();
       
  }
  
  
  addUser(user: User) {
    const id = this.afs.createId();
    this.itemsCollection.doc(id).set(user);
  }
  

  removeUser(id: string) {
    this.itemsCollection.doc(id).delete;
  }
}
