import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { sports } from './sports';
import {} from './api.model'
import { Details } from './details.model';
import {Login} from './login.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  car
  formData : Details;
  list : Details[];
  formLogin : Login;
  list1 : Login[];
  
  uri = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getCars()
  {
   
     return  this.http.get('http://localhost:3000/customer');
    
     
     
  }
  getFilms()
  {
   
     return  this.http.get('http://localhost:3000/film');
    
     
     
  }
  postEmployee(formData : Details){

    return this.http.post('http://localhost:3000/form',formData);
 
     
 
   }
   postLogin(formLogin : Login){
     return this.http.post('http://localhost:3000/login',formLogin);

   }
   refreshList(){

    this.http.get('http://localhost:3000/form')

    .toPromise().then(res => this.list = res as Details[]);

  }
  refreshLists(){

    this.http.get('http://localhost:3000/login')

    .toPromise().then(res => this.list1 = res as Login[]);

  }
  
    
  
  
  
}
