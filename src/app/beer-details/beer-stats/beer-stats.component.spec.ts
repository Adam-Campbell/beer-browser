import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockBeer } from '../../mockData';
import { getNativeElFromCSS } from '../../testUtils';
import { BeerStatsComponent } from './beer-stats.component';

describe('BeerStatsComponent', () => {
  let component: BeerStatsComponent;
  let fixture: ComponentFixture<BeerStatsComponent>;
  let selectEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStatsComponent);
    component = fixture.componentInstance;
    component.abv = mockBeer.abv;
    component.ibu = mockBeer.ibu;
    component.ebc = mockBeer.ebc;
    component.srm = mockBeer.srm;
    component.ph = mockBeer.ph;
    component.attenuationLevel = mockBeer.attenuation_level;
    component.volume = mockBeer.volume;
    component.boilVolume = mockBeer.boil_volume;
    fixture.detectChanges();
    selectEl = getNativeElFromCSS<BeerStatsComponent>(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an element for each of the stats passed to it', () => {
    const paras = selectEl('p', { multi: true });
    const values = [
      `ABV: ${mockBeer.abv}`,
      `IBU: ${mockBeer.ibu}`,
      `EBC: ${mockBeer.ebc}`,
      `SRM: ${mockBeer.srm}`,
      `PH: ${mockBeer.ph}`,
      `Attenuation Level: ${mockBeer.attenuation_level}`,
      `Volume: ${mockBeer.volume.value} litres`,
      `Boil Volume: ${mockBeer.boil_volume.value} litres`
    ];
    values.forEach((value) => {
      expect(paras.find(para => para.textContent === value)).toBeTruthy();
    });

  });
  
});
