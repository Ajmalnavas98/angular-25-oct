import { Injectable } from '@angular/core';
import { Details } from './details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  formData : Details

  constructor(private http :HttpClient) { }

  postEmployee(formData : Details){

    return this.http.post('http://localhost:3000/form',formData);
 
     
 
   }

}
