import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beer-browser';

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    //this.beerService.getBeers().subscribe(beerResponse => console.log(beerResponse));
  }
}
