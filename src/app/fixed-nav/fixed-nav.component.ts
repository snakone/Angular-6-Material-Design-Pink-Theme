import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];
  navItemsBooks: string[];
  navItemsFormats: string[];
  navItemsLanguages: string[];

  constructor() {

    this.navTitles = ["Libros","Formato","Idioma"];
    this.navItemsBooks = ["Policíaca","Historia","Literatura", "Consulta", "Infantil"];
    this.navItemsFormats = ["Tapa Dura", "Tapa Blanda", "Digital"];
    this.navItemsLanguages = ["Español", "Catalán", "Inglés"];
  }

  ngOnInit() {
  }

}
