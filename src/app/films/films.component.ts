import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiService} from '../api.service'
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  
  films = [];
  title = 'app';

    columnDefs = [
        {headerName: 'Title', field: 'title', sortable: true, filter: true,checkboxSelection: true },
        {headerName: 'Description', field: 'description', sortable: true, filter: true },
        {headerName: 'Release_year', field: 'release_year', sortable: true, filter: true,editable: true}
    ];

    rowData: any;

    constructor(private http: HttpClient,private apiserve : ApiService) {

    }

    ngOnInit() {
      this.rowData = this.http.get('http://localhost:3000/film');
      this.apiserve.getFilms().subscribe((data : any[]) => {console.log(data);
      console.log('films data :',data);
      this.films = data;
 
   })
 
  }
}