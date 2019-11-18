import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  RangeErrorMatcher,
  rangeValidatorFactory,
  errorMessageGetterFactory,
  getSafeValue
} from './utils';

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

  // Custom ErrorStateMatchers for the number inputs
  abvErrorMatcher = new RangeErrorMatcher('abvRangeError');
  ibuErrorMatcher = new RangeErrorMatcher('ibuRangeError');
  // Specialised functions for each of the number inputs that determines which (if any)
  // error message should be shown based on form state.
  getAbv_gtErrorMessage = errorMessageGetterFactory(this.filtersForm, 'abv', true);
  getAbv_ltErrorMessage = errorMessageGetterFactory(this.filtersForm, 'abv', false);
  getIbu_gtErrorMessage = errorMessageGetterFactory(this.filtersForm, 'ibu', true);
  getIbu_ltErrorMessage = errorMessageGetterFactory(this.filtersForm, 'ibu', false);

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      this.syncForm(queryParamMap);
    });
  }

  syncForm(params: ParamMap) {
    this.filtersForm.setValue({
      abv_gt: getSafeValue(params, 'abv_gt', 0, true),
      abv_lt: getSafeValue(params, 'abv_lt', 80, true),
      ibu_gt: getSafeValue(params, 'ibu_gt', 0, true),
      ibu_lt: getSafeValue(params, 'ibu_lt', 280, true),
      yeast: getSafeValue(params, 'yeast', ''),
      hops: getSafeValue(params, 'hops', ''),
      malt: getSafeValue(params, 'malt', ''),
      food: getSafeValue(params, 'food', '') 
    });
  }

  onFormSubmit() {
    const filtersFormValues = this.filtersForm.value;
    this.router.navigate([
      'beers'
    ], { queryParams: filtersFormValues });
  }

}
