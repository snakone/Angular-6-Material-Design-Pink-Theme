import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { BooksAppComponent } from './books-app/books-app.component';
import { BookTableComponent } from './book-table/book-table.component';

const app_Routes: Routes = [
  { path: 'home', component: AppWelcomeComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'books', component: BooksAppComponent },
  { path: 'list', component: BookTableComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
