import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDetailsViewComponent } from './beer-details-view.component';
import { BeerHeaderComponent } from '../beer-header/beer-header.component';
import { BeerIngredientsComponent } from '../beer-ingredients/beer-ingredients.component';
import { ServingTipsComponent } from '../serving-tips/serving-tips.component';
import { BeerStatsComponent } from '../beer-stats/beer-stats.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { mockBeer } from '../../mockData';
import { getNativeElFromCSS } from '../../testUtils';


describe('BeerDetailsViewComponent', () => {
  let component: BeerDetailsViewComponent;
  let fixture: ComponentFixture<BeerDetailsViewComponent>;
  let selectEl;

  beforeEach(async(() => {
    window.localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [ 
        BeerDetailsViewComponent,
        BeerHeaderComponent, 
        BeerIngredientsComponent,
        BeerStatsComponent,
        ServingTipsComponent 
      ],
      imports: [
        MatChipsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsViewComponent);
    component = fixture.componentInstance;
    component.beer = mockBeer;
    component.isLoading = false;
    fixture.detectChanges();
    selectEl = getNativeElFromCSS<BeerDetailsViewComponent>(fixture);
  });

  afterEach(() => {
    window.localStorage.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the loading spinner when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(selectEl('mat-progress-spinner')).toBeTruthy();
  });

  it('updates isBookmarked when the button is clicked', () => {
    // initially false
    expect(component.isBookmarked).toBe(false);
    // true after button click
    selectEl('button', { returnFull: true }).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isBookmarked).toBe(true);
    // false again after second button click
    selectEl('button', { returnFull: true }).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isBookmarked).toBe(false);
  });
  
});
