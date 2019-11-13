import { Component, Input } from '@angular/core';
import { Beer } from '../../../types';
 
@Component({
  selector: 'app-beer-details-view',
  templateUrl: './beer-details-view.component.html',
  styleUrls: ['./beer-details-view.component.css']
})
export class BeerDetailsViewComponent {

  constructor() { }

  @Input() beer: Beer; 

}
