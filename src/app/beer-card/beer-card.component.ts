import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../../types';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  @Input() beer: Beer;
  isBookmarked: boolean;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.isBookmarked = this.beerService.checkIfBookmarked(this.beer.id);
  }

  handleBookmarkButtonClick() {
    if (this.isBookmarked) {
      this.beerService.removeBeer(this.beer.id);
      this.isBookmarked = false;
    } else {
      this.beerService.saveBeer(this.beer);
      this.isBookmarked = true;
    }
  }

}
