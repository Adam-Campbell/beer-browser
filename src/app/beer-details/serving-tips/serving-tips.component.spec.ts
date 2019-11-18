import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { ServingTipsComponent } from './serving-tips.component';
import { mockBeer } from '../../mockData';
import { getNativeElFromCSS } from '../../testUtils';

describe('ServingTipsComponent', () => {
  let component: ServingTipsComponent;
  let fixture: ComponentFixture<ServingTipsComponent>;
  let selectEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingTipsComponent ],
      imports: [ MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServingTipsComponent);
    component = fixture.componentInstance;
    component.foodPairings = mockBeer.food_pairing;
    component.brewersTips = mockBeer.brewers_tips;
    fixture.detectChanges();
    selectEl = getNativeElFromCSS<ServingTipsComponent>(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a chip for each of the food pairings provided', () => {
    const chips = selectEl('mat-chip', { multi: true });
    mockBeer.food_pairing.forEach(food => {
      expect(chips.find(chip => chip.textContent === food)).toBeTruthy();
    });
  });

  it('renders the brewers tips provided', () => {
    expect(selectEl('p').textContent).toBe(mockBeer.brewers_tips);
  }) 
});
