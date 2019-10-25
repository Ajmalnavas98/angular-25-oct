import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-thirdform',
  templateUrl: './thirdform.component.html',
  styleUrls: ['./thirdform.component.css']
})
export class ThirdformComponent implements OnInit {
  favouriteGame : String;
  Games :String[] = ['Assasins creed','nfs','gta'];
  val =0;
  max = 100;

  constructor() { }

  ngOnInit() {
  }

}
