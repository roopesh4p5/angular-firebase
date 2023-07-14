import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent {
  
users:any;
constructor(private http:HttpClient){}



  onSubmit(user:any){
  
    console.log(user);
   
  }
}
