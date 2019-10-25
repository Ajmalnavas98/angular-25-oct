import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
 

import {ApiService} from '../api.service';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from '../details.service';





@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  
    constructor(private Http : HttpClient,private apiservice : ApiService) {
      this.resetForm();
    
  }
   
  ngOnInit(){

  }
  resetForm(form?: NgForm) {

    if (form != null)

      form.resetForm();

    this.apiservice.formData = {

      firstname: '',

      lastname: '',

      email: '',

      gender: '',

      phone_number: ''

    }

  }
  onSubmit(form: NgForm) {

    

      this.insertRecord(form);

   
  }
  insertRecord(form: NgForm) {

    this.apiservice.postEmployee(form.value).subscribe(res => {

      

      this.resetForm(form);
      this.apiservice.refreshList();

      

    });

  }



}



