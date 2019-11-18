import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BeerCardComponent } from './beer-card.component';
import { TruncateWithEllipsisPipe } from '../truncate-with-ellipsis.pipe';
import { mockBeer } from '../mockData';
import { BookmarkService } from '../bookmark.service';

import { getNativeElFromCSS } from '../testUtils';


describe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;
  let selectEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BeerCardComponent,
        TruncateWithEllipsisPipe 
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
    component.beer = mockBeer;
    selectEl = getNativeElFromCSS<BeerCardComponent>(fixture);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays the image and info for the beer passed to it', () => {
    fixture.detectChanges();

    expect(selectEl('img').src).toBe(mockBeer.image_url);
    expect(selectEl('mat-card-title').textContent).toBe(mockBeer.name);
    expect(selectEl('mat-card-subtitle').textContent).toBe(mockBeer.tagline);

    const pipe = new TruncateWithEllipsisPipe();
    const expectedDescription = pipe.transform(mockBeer.description, 200);
    expect(selectEl('mat-card-content').textContent).toBe(expectedDescription);
    
  });

  it("sets the isBookmarked property to false when the beer is not bookmarked at initiation", () => {
    const bookmarkService = TestBed.get(BookmarkService);
    spyOn(bookmarkService, 'checkIfBookmarked').and.returnValue(false);
    fixture.detectChanges();
    expect(component.isBookmarked).toBe(false);
  });

  it("sets the isBookmarked property to true when the beer is bookmarked at initiation", () => {
    const bookmarkService = TestBed.get(BookmarkService);
    spyOn(bookmarkService, 'checkIfBookmarked').and.returnValue(true);
    fixture.detectChanges();
    expect(component.isBookmarked).toBe(true);
  });

  it(`displays a bookmark button when isBookmarked is false that bookmarks the beer and updates 
  isBookmarked when clicked`, () => {

    const bookmarkService = TestBed.get(BookmarkService);
    spyOn(bookmarkService, 'addBookmark');

    component.isBookmarked = false;
    fixture.detectChanges();

    const button = selectEl('button', { returnFull: true });
    const icon = selectEl('mat-icon');
    // The correct icon is displayed before the click
    expect(icon.textContent).toBe('add_circle');

    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // The correct actions are taken after the click
    expect(bookmarkService.addBookmark).toHaveBeenCalledWith(component.beer);
    expect(component.isBookmarked).toBe(true);

  });

  it(`displays a remove bookmark button when isBookmarked is true that removes the bookmark and
  updates isBookmarked when clicked`, () => {

    const bookmarkService = TestBed.get(BookmarkService);
    spyOn(bookmarkService, 'removeBookmark');
    fixture.detectChanges();

    component.isBookmarked = true;
    fixture.detectChanges();

    const button = selectEl('button', { returnFull: true });
    const icon = selectEl('mat-icon');
    // The correct icon is displayed before the click
    expect(icon.textContent).toBe('remove_circle');

    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // The correct actions are taken after the click
    expect(bookmarkService.removeBookmark).toHaveBeenCalledWith(component.beer.id);
    expect(component.isBookmarked).toBe(false);
  });

});
