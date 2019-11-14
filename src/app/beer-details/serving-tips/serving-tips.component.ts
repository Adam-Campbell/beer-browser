import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serving-tips',
  templateUrl: './serving-tips.component.html',
  styleUrls: ['./serving-tips.component.css']
})
export class ServingTipsComponent {

  constructor() { }

  @Input() foodPairings: string[];
  @Input() brewersTips: string;

}
