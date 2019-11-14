import { Component, OnInit, Input } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { Beer } from '../../types';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  @Input() beer: Beer;
  isBookmarked: boolean;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.isBookmarked = this.bookmarkService.checkIfBookmarked(this.beer.id);
  }

  handleBookmarkButtonClick() {
    if (this.isBookmarked) {
      this.bookmarkService.removeBookmark(this.beer.id);
      this.isBookmarked = false;
    } else {
      this.bookmarkService.addBookmark(this.beer);
      this.isBookmarked = true;
    }
  }

}
