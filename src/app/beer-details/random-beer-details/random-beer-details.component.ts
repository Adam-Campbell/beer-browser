import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { DataFetcherService } from '../../data-fetcher.service';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Beer } from '../../../types';

@Component({
  selector: 'app-random-beer-details',
  templateUrl: './random-beer-details.component.html',
  styleUrls: ['./random-beer-details.component.css']
})
export class RandomBeerDetailsComponent implements OnInit, OnDestroy {

	constructor(
		private dataFetcherService: DataFetcherService,
		private router: Router
	) { }
	  
	public destroyed = new Subject<any>();
	beer: Beer;

	fetchData(): void {
		this.dataFetcherService.getRandomBeer().subscribe(response => {
			this.beer = response[0];
		});
	}

  	ngOnInit() {
		// fetches data on initial mount
		this.fetchData();
		// fetches data everytime you navigate to this route from this route (soft
		// refresh).
		this.router.events.pipe(
			filter((event: RouterEvent) => event instanceof NavigationEnd),
			takeUntil(this.destroyed)
		).subscribe(() => this.fetchData());
	}
	  
	ngOnDestroy() {
		// Needed to prevent a memory leak when navigating away from this route. The act of
		// the `destroyed` subject emitting a value causes the takeUntil operator to cease emitting
		// values.
		this.destroyed.next();
		this.destroyed.complete();
	}

}
