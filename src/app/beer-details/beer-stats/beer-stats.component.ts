import { Component, OnInit, Input } from '@angular/core';
import { Measure } from '../../../types';

@Component({
  selector: 'app-beer-stats',
  templateUrl: './beer-stats.component.html',
  styleUrls: ['./beer-stats.component.css']
})
export class BeerStatsComponent implements OnInit {

  constructor() { }

  @Input() abv: number | null;
  @Input() ibu: number | null;
  @Input() ebc: number | null;
  @Input() srm: number | null;
  @Input() ph: number | null;
  @Input() attenuationLevel: number | null;
  @Input() volume: Measure;
  @Input () boilVolume: Measure;

  ngOnInit() {
  }

}
