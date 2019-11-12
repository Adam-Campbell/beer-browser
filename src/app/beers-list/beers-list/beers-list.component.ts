import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../beer.service';
import { Beer } from '../../../types';
import { flatMap, map } from 'rxjs/operators';

@Component({
  	selector: 'app-beers-list',
  	templateUrl: './beers-list.component.html',
  	styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  	beers: Beer[];

  	constructor(
    	private beerService: BeerService,
    	private activatedRoute: ActivatedRoute
  	) { }

  	ngOnInit() {
		this.activatedRoute.queryParamMap.pipe(
			map(queryParamMap => {
				return queryParamMap.keys.reduce((acc, key) => {
					const val = queryParamMap.get(key);
					acc[key] = val;
					return acc;
				}, {})
			}),
			flatMap(paramsObject => this.beerService.getBeers(paramsObject)),
			map(response => this.beers = response)
		)
		.subscribe();
  	}

}
