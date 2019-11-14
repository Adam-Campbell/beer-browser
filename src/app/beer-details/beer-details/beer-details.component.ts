import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../data-fetcher.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap, switchMap } from 'rxjs/operators';
import { Beer } from '../../../types';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  constructor(
    private dataFetcherService: DataFetcherService,
    private activatedRoute: ActivatedRoute
  ) { }

  beer: Beer;

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      map(paramMap => parseInt( paramMap.get('id') )),
      switchMap(id => this.dataFetcherService.getBeerById(id)),
      map(beers => beers[0]),
      tap(beer => {
        this.beer = beer;
        console.log(this.beer);
      })
    )
    .subscribe();
  }


}
