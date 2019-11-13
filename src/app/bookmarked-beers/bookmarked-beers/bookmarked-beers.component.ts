import { Component, OnInit } from '@angular/core';
import { Beer } from '../../../types';
import { BeerService } from '../../beer.service';

@Component({
	selector: 'app-bookmarked-beers',
  	templateUrl: './bookmarked-beers.component.html',
  	styleUrls: ['./bookmarked-beers.component.css']
})
export class BookmarkedBeersComponent implements OnInit {

	constructor(private beerService: BeerService) { }

	beers: Beer[];

	ngOnInit() {
		this.beerService.savedBeers$.subscribe(beers => this.beers = beers);
	}

}
