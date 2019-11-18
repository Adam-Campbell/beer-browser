import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedBeersComponent } from './bookmarked-beers.component';

xdescribe('BookmarkedBeersComponent', () => {
  let component: BookmarkedBeersComponent;
  let fixture: ComponentFixture<BookmarkedBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
