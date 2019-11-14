import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.css']
})
export class ListFiltersComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
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
  }

  onFormSubmit() {
    const filtersFormValues = this.filtersForm.value;
    this.router.navigate([
      'beers'
    ], { queryParams: filtersFormValues });
  }

}
