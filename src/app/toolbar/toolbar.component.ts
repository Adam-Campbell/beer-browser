import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private bookmarkService: BookmarkService) { }

  bookmarksCount: string;

  ngOnInit() {
    this.bookmarkService.bookmarks$.subscribe(bookmarks => {
      const count = bookmarks.length;
      this.bookmarksCount =  count > 99 ? '99+' : count.toString();
    });
  }

}
