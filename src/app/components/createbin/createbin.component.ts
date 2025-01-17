import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../models/Snippet';

@Component({
  selector: 'app-createbin',
  imports: [ReactiveFormsModule],
  //ReactiveFormsModule is required or else error will be thrown in html code
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css'
})
export class CreatebinComponent {

  constructor(private dbService: DbService){}
    public counter:any=0;
    title=new FormControl("",[
      Validators.required
    ])
  
    code=new FormControl("",[
      Validators.required
    ])
  
    binForm = new FormGroup({
      title:this.title,
      code:this.code
    })
  
    create(){
      this.counter++;
      console.log(this.binForm.value);
      // const sendingData = this.binForm.value+this.counter;  temp changes
      this.dbService.createSnippet(this.binForm.value as Snippet);
    }
  
    reset(){
      this.binForm.reset;
    }
}
