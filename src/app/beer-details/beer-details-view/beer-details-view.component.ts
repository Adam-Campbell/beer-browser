import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../../types';
import { BeerService } from '../../beer.service';
 
@Component({
  selector: 'app-beer-details-view',
  templateUrl: './beer-details-view.component.html',
  styleUrls: ['./beer-details-view.component.css']
})
export class BeerDetailsViewComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  @Input() beer: Beer;
  isBookmarked: boolean; 

  ngOnInit() {
    this.beerService.savedBeers$.subscribe(() => {
      this.isBookmarked = this.beerService.checkIfBookmarked(this.beer.id);
    });
  }

  handleBookmarkButtonClick() {
    if (this.isBookmarked) {
      this.beerService.removeBeer(this.beer.id);
    } else {
      this.beerService.saveBeer(this.beer);
    }
  }

}
