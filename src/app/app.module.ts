import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

// Animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Module

import { MaterialModule } from './material';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BookTableComponent } from './book-table/book-table.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { scrollfixedNav } from './fixed-nav/scroll.directive';
import { FixedNavComponent } from './fixed-nav/fixed-nav.component';
import { BooksAppComponent } from './books-app/books-app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { AppAboutComponent } from './app-about/app-about.component';

//app_routes

import { AppRoutingModule } from './app.routes';
import { TopTitleComponent } from './top-title/top-title.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BookTableComponent,
    AppGridComponent,
    scrollfixedNav,
    FixedNavComponent,
    BooksAppComponent,
    TopMenuComponent,
    FooterMenuComponent,
    AppAboutComponent,
    TopTitleComponent,
    FooterNavComponent,
    AppWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
