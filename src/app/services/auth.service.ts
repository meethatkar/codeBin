import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid?:String;

  constructor(private router:Router) {
    const auth = getAuth();   //this is firebase's auth method
    onAuthStateChanged(auth, (user) => {
      if(user){
        this.uid = user.uid;
        console.log("User logged in as", user.email);
      }
      else{
        this.uid = undefined;
        console.log("User logged out");
        router.navigate(['/login'])
      }
    })
   }

   isAutheticated(){
    return this.uid ? true : false;   //if uid exist return true
   }

   getUid(){
    return this.uid;  //made as uid is private so io access it
   }

  registerUser(email:any,password:any){

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log({user});
      this.router.navigate(['/']);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("Something went wrong while signup try again !!");
    });
  }

  loginUser(email:string,password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log({user});
      this.router.navigate(['/']);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("Something went wrong while login, try again");
    });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).catch((error) => {      //here signOut(auth) method is used to signout user it's a inbuilt method and 
                                          // while it's execution onAuthStateChanged this method is also called whihc is specified in constructor
      alert("soemthing went wrong while logging out");
    })
  }
}
