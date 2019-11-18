import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { ListFiltersComponent } from './list-filters.component';

describe('ListFiltersComponent', () => {
  let component: ListFiltersComponent;
  let fixture: ComponentFixture<ListFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListFiltersComponent 
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatExpansionModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correctly performs validation on the abv_gt field', () => {
    const control = component.filtersForm.get('abv_gt');
    expect(control.valid).toBe(true);
    control.setValue(null);
    expect(control.valid).toBe(false);
    expect(control.errors.required).toBeTruthy();
    control.setValue(-1);
    expect(control.valid).toBe(false);
    expect(control.errors.min).toBeTruthy();
  });

  it('correctly performs validation on the abv_lt field', () => {
    const control = component.filtersForm.get('abv_lt');
    expect(control.valid).toBe(true);
    control.setValue(null);
    expect(control.valid).toBe(false);
    expect(control.errors.required).toBeTruthy();
  });

  it('correctly performs validation on the ibu_gt field', () => {
    const control = component.filtersForm.get('ibu_gt');
    expect(control.valid).toBe(true);
    control.setValue(null);
    expect(control.valid).toBe(false);
    expect(control.errors.required).toBeTruthy();
    control.setValue(-1);
    expect(control.valid).toBe(false);
    expect(control.errors.min).toBeTruthy();
  });

  it('correctly performs validation on the ibu_lt field', () => {
    const control = component.filtersForm.get('ibu_lt');
    expect(control.valid).toBe(true);
    control.setValue(null);
    expect(control.valid).toBe(false);
    expect(control.errors.required).toBeTruthy();
  });

  it('correctly performs cross field validation for the ABV fields', () => {
    const gtControl = component.filtersForm.get('abv_gt');
    const ltControl = component.filtersForm.get('abv_lt');
    gtControl.setValue(5);
    ltControl.setValue(5);
    expect(component.filtersForm.valid).toBe(false);
    expect(component.filtersForm.errors.abvRangeError).toBe(true);
  });

  it('correctly performs cross field validation for the IBU fields', () => {
    const gtControl = component.filtersForm.get('ibu_gt');
    const ltControl = component.filtersForm.get('ibu_lt');
    gtControl.setValue(5);
    ltControl.setValue(5);
    expect(component.filtersForm.valid).toBe(false);
    expect(component.filtersForm.errors.ibuRangeError).toBe(true);
  });

  it('correctly updates the values of the form when the syncForm method is called', () => {
    const mockedParamMap = {
      keys: [],
      has(name: string): boolean {
        return false;
      },
      getAll(name: string): string[] {
        return [];
      },
      get(name: string): string | null {
        const vals = {
          abv_gt: '5',
          abv_lt: '60',
          ibu_gt: '15',
          ibu_lt: '185',
          yeast: 'foo',
          hops: 'bar',
          malt: 'baz',
          food: 'foobar'
        };
        return vals[name];
      }
    };

    component.syncForm(mockedParamMap);
    expect(component.filtersForm.value).toEqual({
      abv_gt: 5,
      abv_lt: 60,
      ibu_gt: 15,
      ibu_lt: 185,
      yeast: 'foo',
      hops: 'bar',
      malt: 'baz',
      food: 'foobar'
    });

  });

  it('calls the router.navigate method with the correct arguments when the form is submitted', () => {
    const routerService = TestBed.get(Router);
    spyOn(routerService, 'navigate');
    const expectedParams = {
      abv_gt: 0,
      abv_lt: 80,
      ibu_gt: 0,
      ibu_lt: 280,
      yeast: '',
      hops: '',
      malt: '',
      food: ''
    };
    component.onFormSubmit();
    expect(routerService.navigate).toHaveBeenCalledWith(['beers'], { queryParams: expectedParams });
  });
  
});
