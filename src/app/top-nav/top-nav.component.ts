import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  appTitle: string;
  ngVersion: string;
  appSource: string;
  githubLink: string;
  appMail: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {

    this.appTitle = "Tinta Virtual";
    this.ngVersion = "Angular 6";
    this.appSource = "Material Design";
    this.githubLink = "http://github.com";
    this.appMail = "mailto:sergio.martinez87.web@gmail.com?Subject=Angular%20Material";
  }

  }
