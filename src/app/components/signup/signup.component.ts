import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {



  constructor(private router:Router,private authService: AuthService){
  }
  register(regForm:NgForm){
    console.log(regForm.value);
    this.authService.registerUser(regForm.value.email,regForm.value.password);
  }
  reset(regForm:NgForm){
    regForm.reset();
  }
}
