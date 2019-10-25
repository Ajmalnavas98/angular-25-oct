import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent implements OnInit {

  constructor(private apiservice : ApiService,private http : HttpClient) {this.resetForm() }

  ngOnInit() {
  }
  
  resetForm(form?: NgForm) {

    if (form != null)

      form.resetForm();

    this.apiservice.formLogin = {

      username: '',

      password: '',

     
    }

  }
  onSubmit(form: NgForm) {

    

      this.insertRecord(form);

   
  }
  insertRecord(form: NgForm) {

    this.apiservice.postLogin(form.value).subscribe(res => {

      

      this.resetForm(form);
      this.apiservice.refreshLists();

      

    });

  }



}

