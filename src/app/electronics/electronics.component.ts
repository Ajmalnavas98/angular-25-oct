import { Component, OnInit } from '@angular/core';
import {electron} from '../electron'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
electron = electron;
  constructor() { }

  ngOnInit() {
  }

}
