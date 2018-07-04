import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrolling]'
})

export class scrollfixedNav {

  constructor(element: ElementRef){
  }


@HostBinding('class.blue') isBlue = false;  // Bind Element Property to a @Diretive

@Input() set scrolling(value){
  this.isBlue = value;
}



  @HostListener('window:scroll') do(){  // Listen for Events

      var fixedNav = document.getElementById("fixed").style;

      if (document.documentElement.scrollTop >= 80){
        fixedNav.transition = "all 1s";
        fixedNav.top = "60px";
      } else {
        fixedNav.transition = "all .2s";
        fixedNav.top = "200px";
      }

    }


    ngOnInit() {
      var fixedNav = document.getElementById("fixed").style;

      if (document.documentElement.scrollTop >= 80){
        fixedNav.transition = "all 1s";
        fixedNav.top = "60px";
      } else {
        fixedNav.transition = "all .2s";
        fixedNav.top = "200px";
      }

    }

}

// Make custom directive support input values from the directive property that matches
// the directive selector on the host element
