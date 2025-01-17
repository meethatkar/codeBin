import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private dbService: DbService){}

  // counter=this.dbService.  temp changes
  items:any = [];   //ismai all codebin data will be stored 
  ngOnInit(){
    this.dbService.getAllSnippet().then((data:any)=>{
      console.log(data);
      this.items = data;
    })
  }
}
