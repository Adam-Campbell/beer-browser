import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BeerHeaderComponent } from './beer-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { mockBeer } from '../../mockData';
import { getNativeElFromCSS } from '../../testUtils';


describe('BeerHeaderComponent', () => {
  let component: BeerHeaderComponent;
  let fixture: ComponentFixture<BeerHeaderComponent>;
  let selectEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerHeaderComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerHeaderComponent);
    component = fixture.componentInstance;
    component.beerName = mockBeer.name;
    component.tagline = mockBeer.tagline;
    component.description = mockBeer.description;
    component.imageUrl = mockBeer.image_url;
    component.isBookmarked = true;
    fixture.detectChanges();
    selectEl = getNativeElFromCSS<BeerHeaderComponent>(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays the image, name, tagline and description passed to it', () => {
    expect(selectEl('img').src).toBe(mockBeer.image_url);
    expect(selectEl('h1').textContent).toBe(mockBeer.name);
    expect(selectEl('.tagline').textContent).toBe(mockBeer.tagline);
    expect(selectEl('p.mat-body').textContent).toBe(mockBeer.description);
  });

  it('displays a button with the appropriate content based on the isBookmarked property', () => {
    expect(selectEl('mat-icon').textContent).toBe('remove_circle');
    component.isBookmarked = false;
    fixture.detectChanges();
    expect(selectEl('mat-icon').textContent).toBe('add_circle')
  });

  it('outputs a bookmarkButtonClicked event when the button is clicked', () => {
    const button = selectEl('button', { returnFull: true });
    let eventHasDispatched = false;
    component.bookmarkButtonClicked.subscribe(() => {
      eventHasDispatched = true;
    });
    button.triggerEventHandler('click', null);
    expect(eventHasDispatched).toBe(true);
  });
});
