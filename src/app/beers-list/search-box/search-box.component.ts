import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../data-fetcher.service';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, of, iif } from 'rxjs';
import { Beer } from '../../../types';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(
    private dataFetcherService: DataFetcherService,
    private router: Router
  ) { }

  searchField = new FormControl();
  filteredOptions: Observable<Beer[]> = of([]);

  ngOnInit() {
    this.filteredOptions = this.searchField.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => value.name ? value.name : value),
      map(value => value.toLowerCase()),
      switchMap(value => iif(
        () => value !== '',
        this.dataFetcherService.searchBeers(value),
        of([])
      )),
      map(beersArray => beersArray.slice(0, 10))
    );
  }

  displayFn(beer?: Beer): string | undefined {
    return beer ? beer.name : undefined;
  }

  handleOptionSelected($event) {
    const { id } = $event.option.value;
    if (id) {
      this.router.navigate(['beer', id]);
    }
  }

}
