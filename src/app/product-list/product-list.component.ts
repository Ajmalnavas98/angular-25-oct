import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ApiService } from '../api.service';
import { sports } from '../sports';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
  cars : any;
  constructor(private apiservice : ApiService) 
 { } 
  ngOnInit()
  {
    this.cars =  this.apiservice.getCars();
    return this.cars
    
  }
  products = products;
  apiserve = ApiService;
  
  
  
  
  
 
  
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
  
  
}