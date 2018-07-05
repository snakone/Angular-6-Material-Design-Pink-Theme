export class booksModel {

  constructor (
      public bookId: number,
      public bookTitle: string,
      public bookAuthor: string,
      public bookGender: string,
      public bookPrice: number,
      public bookImage: string,
      public bookLikes: number
  ){}
}
