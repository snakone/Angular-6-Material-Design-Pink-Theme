import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.css']
})

export class AppGridComponent implements OnInit {

  gridTitle: string;
  gridsubTitle: string;


  constructor() {

  this.gridTitle = "Tinta Virtual";
  this.gridsubTitle = "Libros digitales y de siempre";

 }


  ngOnInit() {
  }

}
