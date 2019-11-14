import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';

class RangeErrorMatcher implements ErrorStateMatcher {
  constructor(private errorType: string) {}
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log(control.errors);
    return control.invalid || (form.errors && form.errors[this.errorType])
  }
}

const rangeValidatorFactory = (fieldGroup: string) => (form: FormGroup) => {
    const gtControlValue = form.get(`${fieldGroup}_gt`).value;
    const ltControlValue = form.get(`${fieldGroup}_lt`).value;
    console.log(gtControlValue, ltControlValue);
    return ltControlValue > gtControlValue ? null : { [`${fieldGroup}RangeError`]: true }
}

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.css']
})
export class ListFiltersComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  abvErrorMatcher = new RangeErrorMatcher('abvRangeError');
  ibuErrorMatcher = new RangeErrorMatcher('ibuRangeError');

  filtersForm = this.fb.group({
    abv_gt: [0, [Validators.required, Validators.min(0)] ],
    abv_lt: [80, [Validators.required, Validators.min(0)] ],
    ibu_gt: [0, [Validators.required, Validators.min(0)] ],
    ibu_lt: [280, [Validators.required, Validators.min(0)] ],
    yeast: [''],
    hops: [''],
    malt: [''],
    food: ['']
  }, { validators: [ 
      rangeValidatorFactory('abv'),
      rangeValidatorFactory('ibu')
    ]
  });

  getAbv_gtErrorMessage() {
    if (this.filtersForm.errors && this.filtersForm.errors.abvRangeError) {
      return 'Must be less than adjacent field'
    } else {
      const control = this.filtersForm.controls.abv_gt;
      if (control.errors && control.errors.required) {
        return 'This field is required'
      } else if (control.errors && control.errors.min) {
        return 'This field must be 0 or greater'
      }
    }
  }

  getAbv_ltErrorMessage() {
    if (this.filtersForm.errors && this.filtersForm.errors.abvRangeError) {
      return 'Must be greater than adjacent field'
    } else {
      const control = this.filtersForm.controls.abv_lt;
      if (control.errors && control.errors.required) {
        return 'This field is required'
      }
    }
  }

  getIbu_gtErrorMessage() {
    if (this.filtersForm.errors && this.filtersForm.errors.ibuRangeError) {
      return 'Must be less than adjacent field'
    } else {
      const control = this.filtersForm.controls.ibu_gt;
      if (control.errors && control.errors.required) {
        return 'This field is required'
      } else if (control.errors && control.errors.min) {
        return 'This field must be 0 or greater'
      }
    }
  }

  getIbu_ltErrorMessage() {
    if (this.filtersForm.errors && this.filtersForm.errors.ibuRangeError) {
      return 'Must be greater than adjacent field'
    } else {
      const control = this.filtersForm.controls.ibu_lt;
      if (control.errors && control.errors.required) {
        return 'This field is required'
      }
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      this.syncForm(queryParamMap);
    });
  }

  syncForm(params: ParamMap) {

    const getValue = (key: string, defaultValue: string|number, shouldParseToInt?: boolean): string|number => {
      if (shouldParseToInt) {
        const value = parseInt( params.get(key) );
        return Number.isNaN(value) ? defaultValue : value;
      } else {
        const value = params.get(key);
        return value === null ? defaultValue : value;
      }
    }

    this.filtersForm.setValue({
      abv_gt: getValue('abv_gt', 0, true),
      abv_lt: getValue('abv_lt', 80, true),
      ibu_gt: getValue('ibu_gt', 0, true),
      ibu_lt: getValue('ibu_lt', 200, true),
      yeast: getValue('yeast', ''),
      hops: getValue('hops', ''),
      malt: getValue('malt', ''),
      food: getValue('food', '') 
    });
  }

  onFormSubmit() {
    const filtersFormValues = this.filtersForm.value;
    this.router.navigate([
      'beers'
    ], { queryParams: filtersFormValues });
  }

}
