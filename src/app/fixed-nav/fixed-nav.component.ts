import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];

  Genders: string[];
  Formats: string[];
  Languages: string[];

  constructor() {

    this.navTitles = ["Libros","Formato","Idioma"];

    this.Genders = ["Policíaca","Historia","Literatura", "Consulta", "Infantil", "Juvenil"];
    this.Formats = ["Tapa Dura", "Tapa Blanda", "Digital"];
    this.Languages = ["Español", "Catalán", "Inglés"];
  }

  ngOnInit() {
  }

}
