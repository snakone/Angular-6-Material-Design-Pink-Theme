import { Component, OnInit, Input } from '@angular/core';
import { booksModel } from './books.model'; // import the book model

@Component({
  selector: 'books-app',
  templateUrl: './books-app.component.html',
  styleUrls: ['./books-app.component.css']
})
export class BooksAppComponent implements OnInit {

  urlPath: string;
  public books: booksModel[]; // instance books as a book model

    p: number = 1; // ngxPagination

  constructor() {
    this.urlPath ="../assets/image/books/";
    this.books= [
      {
          "bookId" : 1,
          "bookTitle" : "The Punisher",
          "bookAuthor" : "Gerry Conway",
          "bookGender" : "Acción",
          "bookPrice" : 15.5,
          "bookImage" : "Punisher",
          "bookLikes" : 0
      },
      {
          "bookId" : 2,
          "bookTitle" : "La desaparición de Stephanie Mailer",
          "bookAuthor" : "Joël Dicker ",
          "bookGender" : "Literatura",
          "bookPrice" : 21.4,
          "bookImage" : "StephanieMailer",
          "bookLikes" : 0
      },
      {
          "bookId" : 3,
          "bookTitle" : "Con un cassette y un boli Bic",
          "bookAuthor" : "Defreds",
          "bookGender" : "Poesia",
          "bookPrice" : 19.6,
          "bookImage" : "Cassete",
          "bookLikes" : 0
      },
      {
          "bookId" :4,
          "bookTitle" : "Los perros duros no bailan",
          "bookAuthor" : "A. Pérez-Reverte",
          "bookGender" : "Narrativa",
          "bookPrice" : 25.3,
          "bookImage" : "PerrosBailan",
          "bookLikes" : 0
      },
      {
          "bookId" : 5,
          "bookTitle" : "El proyecto de mi vida",
          "bookAuthor" : "Megan Maxwell",
          "bookGender" : "Romántica",
          "bookPrice" : 13.5,
          "bookImage" : "Megan",
          "bookLikes" : 0
      },{
          "bookId" : 6,
          "bookTitle" : "Stars: Estrellas Fugaces",
          "bookAuthor" : "Anna Todd",
          "bookGender" : "Juvenil",
          "bookPrice" : 14.9,
          "bookImage" : "Stars",
          "bookLikes" : 0
      },{
          "bookId" : 7,
          "bookTitle" : "Culpa mía",
          "bookAuthor" : "Mercedes Ron",
          "bookGender" : "Juvenil",
          "bookPrice" : 22.1,
          "bookImage" : "Culpa",
          "bookLikes" : 0
      },{
          "bookId" : 8,
          "bookTitle" : "Pasajera",
          "bookAuthor" : "Alexandra Bracken",
          "bookGender" : "Juvenil",
          "bookPrice" : 16.6,
          "bookImage" : "Pasajera",
          "bookLikes" : 0
      }
    ];
  }

  ngOnInit() {

  }

  addBook():void{

    this.books.push({
      "bookId" : 9,
      "bookTitle" : "Con un cassette y un boli Bic",
      "bookAuthor" : "Defreds",
      "bookGender" : "Poesia",
      "bookPrice" : 19.6,
      "bookImage" : "Cassete",
      "bookLikes" : 0
    });

  }

  addLike(id){
    id = id-1; // Convert bookId into his Array value
    this.books[id].bookLikes = this.books[id].bookLikes+1;
    return false;

  }

}
