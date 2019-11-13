import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerIngredientsComponent } from './beer-ingredients.component';

describe('BeerIngredientsComponent', () => {
  let component: BeerIngredientsComponent;
  let fixture: ComponentFixture<BeerIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
