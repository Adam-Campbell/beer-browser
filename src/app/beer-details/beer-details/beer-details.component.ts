import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../beer.service';
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
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute
  ) { }

  beer: Beer;

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      map(paramMap => parseInt( paramMap.get('id') )),
      switchMap(id => this.beerService.getBeer(id)),
      map(beers => beers[0]),
      tap(beer => {
        this.beer = beer;
        console.log(this.beer)
      })
    )
    .subscribe();
  }


}
