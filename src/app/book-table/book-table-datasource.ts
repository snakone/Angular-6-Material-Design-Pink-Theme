import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface BookTableItem {
       bookId: number,
       bookTitle: string,
       bookAuthor: string,
       bookGender: string,
       bookPrice: number,
       bookImage: string,
       bookLikes: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: BookTableItem[] = [
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

/**
 * Data source for the BookTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BookTableDataSource extends DataSource<BookTableItem> {
  data: BookTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<BookTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: BookTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: BookTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'bookTitle': return compare(a.bookTitle, b.bookTitle, isAsc);
        case 'bookAuthor': return compare(a.bookAuthor, b.bookAuthor, isAsc);
        case 'bookGender': return compare(a.bookGender, b.bookGender, isAsc);
        case 'bookPrice': return compare(a.bookPrice, b.bookPrice, isAsc);
        case 'bookLikes': return compare(a.bookLikes, b.bookLikes, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
