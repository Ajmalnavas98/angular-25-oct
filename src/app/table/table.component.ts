import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customer = [];n
  
  constructor(private apiservice : ApiService,private http:HttpClient) {
   
   }

  ngOnInit() {
     this.apiservice.getCars().subscribe((data: any[])=>{
      console.log(data);
    //this.car = [{"name":"BMW", "engine":250}, {"name":"Benz", "engine":250}]
    console.log("Cars Data: ", data)
    this.customer = data;
   
  })
  


}
 
  

}
