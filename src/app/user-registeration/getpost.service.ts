import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetpostService {

  constructor(private http:HttpClient) { }
  
  user:any;
 ngOnInit(){
  this.http.post('https://test1-56251-default-rtdb.firebaseio.com/users.db',this.user).subscribe((response:any)=>{
    console.log(response);
  })
 }
}
