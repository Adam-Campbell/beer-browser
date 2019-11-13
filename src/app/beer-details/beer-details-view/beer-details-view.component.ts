import { Component, Input } from '@angular/core';
import { Beer } from '../../../types';
import { BeerService } from '../../beer.service';
 
@Component({
  selector: 'app-beer-details-view',
  templateUrl: './beer-details-view.component.html',
  styleUrls: ['./beer-details-view.component.css']
})
export class BeerDetailsViewComponent {

  constructor(private beerService: BeerService) { }

  @Input() beer: Beer; 

  bookmarkBeer = () => {
    this.beerService.saveBeer(this.beer);
  }

}
