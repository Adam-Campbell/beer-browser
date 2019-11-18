import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { BeerIngredientsComponent } from './beer-ingredients.component';
import { getNativeElFromCSS } from '../../testUtils';
import { mockBeer } from '../../mockData';

describe('BeerIngredientsComponent', () => {
  let component: BeerIngredientsComponent;
  let fixture: ComponentFixture<BeerIngredientsComponent>;
  let selectEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerIngredientsComponent ],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerIngredientsComponent);
    component = fixture.componentInstance;
    component.yeast = mockBeer.ingredients.yeast;
    component.malts = mockBeer.ingredients.malt;
    component.hops = mockBeer.ingredients.hops;
    fixture.detectChanges();
    selectEl = getNativeElFromCSS<BeerIngredientsComponent>(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the yeast value', () => {
    expect(selectEl('p.standalone-text').textContent).toBeTruthy(mockBeer.ingredients.yeast);
  })

  it('renders the malt and hops data into tables', () => {
    let values = [];
    mockBeer.ingredients.malt.forEach(malt => {
      values.push(malt.name, malt.amount.value);
    });
    mockBeer.ingredients.hops.forEach(hop => {
      values.push(hop.name, hop.add, hop.amount.value, hop.attribute);
    });
    const dataCells = selectEl('td', { multi: true });
    dataCells.forEach((cell, idx) => {
      expect(cell.textContent).toBeTruthy(values[idx]);
    });
  });

  it('does not render any table markup if the hops and malts data arrays are empty', () => {
    component.malts = [];
    component.hops = [];
    fixture.detectChanges();
    expect(selectEl('table', { returnFull: true })).toBeFalsy();
  });
});
