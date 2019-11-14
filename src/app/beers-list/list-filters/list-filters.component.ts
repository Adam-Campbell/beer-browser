import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    abv_gt: [0],
    abv_lt: [80],
    ibu_gt: [0],
    ibu_lt: [280],
    yeast: [''],
    hops: [''],
    malt: [''],
    food: ['']
  });

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
