import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAppComponent } from './books-app.component';

describe('BooksAppComponent', () => {
  let component: BooksAppComponent;
  let fixture: ComponentFixture<BooksAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
