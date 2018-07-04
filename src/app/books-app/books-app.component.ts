import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'books-app',
  templateUrl: './books-app.component.html',
  styleUrls: ['./books-app.component.css']
})
export class BooksAppComponent implements OnInit {

  public urlPath ="../assets/image/books/";

  public books = [
    {
        "bookId" : "1",
        "bookTitle" : "The Punisher",
        "bookAuthor" : "Gerry Conway",
        "bookGender" : "Acción",
        "bookPrice" : "15.5",
        "bookImage" : "Punisher"
    },
    {
        "bookId" : "2",
        "bookTitle" : "La desaparición de Stephanie Mailer",
        "bookAuthor" : "Joël Dicker ",
        "bookGender" : "Literatura",
        "bookPrice" : "21.4",
        "bookImage" : "StephanieMailer"
    },
    {
        "bookId" : "3",
        "bookTitle" : "Con un cassette y un boli Bic",
        "bookAuthor" : "Defreds",
        "bookGender" : "Poesia",
        "bookPrice" : "19.6",
        "bookImage" : "Cassete"
    },
    {
        "bookId" : "4",
        "bookTitle" : "Los perros duros no bailan",
        "bookAuthor" : "A. Pérez-Reverte",
        "bookGender" : "Narrativa",
        "bookPrice" : "25.3",
        "bookImage" : "PerrosBailan"
    },
    {
        "bookId" : "5",
        "bookTitle" : "Con un cassette y un boli Bic",
        "bookAuthor" : "Defreds",
        "bookGender" : "Poesia",
        "bookPrice" : "19.6",
        "bookImage" : "Cassete"
    },{
        "bookId" : "6",
        "bookTitle" : "Con un cassette y un boli Bic",
        "bookAuthor" : "Defreds",
        "bookGender" : "Poesia",
        "bookPrice" : "19.6",
        "bookImage" : "Cassete"
    },{
        "bookId" : "7",
        "bookTitle" : "Con un cassette y un boli Bic",
        "bookAuthor" : "Defreds",
        "bookGender" : "Poesia",
        "bookPrice" : "19.6",
        "bookImage" : "Cassete"
    },{
        "bookId" : "8",
        "bookTitle" : "Con un cassette y un boli Bic",
        "bookAuthor" : "Defreds",
        "bookGender" : "Poesia",
        "bookPrice" : "19.6",
        "bookImage" : "Cassete"
    }
  ];

    p: number = 1;

  constructor() {

  }

  ngOnInit() {

  }

  addBook():void{

    this.books.push({
      "bookId" : "9",
      "bookTitle" : "Con un cassette y un boli Bic",
      "bookAuthor" : "Defreds",
      "bookGender" : "Poesia",
      "bookPrice" : "19.6",
      "bookImage" : "Cassete"
    });

  }

}
