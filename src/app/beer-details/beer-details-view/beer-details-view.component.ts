import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../../types';
import { BookmarkService } from '../../bookmark.service';
 
@Component({
  selector: 'app-beer-details-view',
  templateUrl: './beer-details-view.component.html',
  styleUrls: ['./beer-details-view.component.css']
})
export class BeerDetailsViewComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService) { }

  @Input() beer: Beer;
  @Input() isLoading: boolean;
  isBookmarked: boolean; 

  ngOnInit() {
    this.bookmarkService.bookmarks$.subscribe(() => {
      this.isBookmarked = this.bookmarkService.checkIfBookmarked(this.beer.id);
    });
  }

  handleBookmarkButtonClick() {
    if (this.isBookmarked) {
      this.bookmarkService.removeBookmark(this.beer.id);
    } else {
      this.bookmarkService.addBookmark(this.beer);
    }
  }

}
