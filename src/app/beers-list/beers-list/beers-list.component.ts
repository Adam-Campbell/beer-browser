import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetcherService } from '../../data-fetcher.service';
import { Beer } from '../../../types';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
  	selector: 'app-beers-list',
  	templateUrl: './beers-list.component.html',
  	styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

	  beers: Beer[];
	  isLoading: boolean;

  	constructor(
    	private dataFetcherService: DataFetcherService,
    	private activatedRoute: ActivatedRoute
  	) { }

  	ngOnInit() {
		this.activatedRoute.queryParamMap.pipe(
			tap(() => {
				this.isLoading = true;
			}),
			map(queryParamMap => {
				return queryParamMap.keys.reduce((acc, key) => {
					const val = queryParamMap.get(key);
					acc[key] = val;
					return acc;
				}, {})
			}),
			flatMap(paramsObject => this.dataFetcherService.getBeers(paramsObject)),
			map(response => this.beers = response),
			tap(() => {
				this.isLoading = false;
			})
		)
		.subscribe();
	}

}
