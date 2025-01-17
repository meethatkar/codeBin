import { Injectable, model } from '@angular/core';
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {collection, addDoc, getDocs} from "firebase/firestore";
import { AuthService } from './auth.service';
import {Snippet} from '../models/Snippet';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any;
  constructor(private authService:AuthService, private router:Router) {
    this.db = getFirestore();
   }

   async createSnippet(snippet: Snippet){

    try{
      const docRef = await addDoc(collection(this.db, "collectionSnippet"),{
      ...snippet,
        by: this.authService.getUid()
      });
      console.log("Document written with ID: ",docRef.id);
      this.router.navigate(['/']);
    } catch (e) {
      console.error("Error adding document: ",e);
      alert("Error while creating");
    }
   }

   async getAllSnippet(){
    let result: any[] = [];
    try{
      const querySnapshot = await getDocs(collection(this.db, "collectionSnippet"));
      querySnapshot.forEach((doc) => {
        result.push({id:doc.id, ...doc.data() })
      });
      return result;
    } catch(e){
      console.log("error while: getting snippet: ", e);
      alert("error while: getting snippet:");
      return e;
    }
   }

   async getSnippetById(docId:string){
    const docRef = doc(this.db, "collectionSnippet", docId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document data: ",docSnap.data());
      return docSnap.data()
    }
    else{
      return{id:"0",title:"not found",code:"not found"}
    }
   }
}
