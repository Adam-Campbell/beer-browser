import { TestBed } from '@angular/core/testing';
import { BookmarkService } from './bookmark.service';



/*

Considerations:

I will need to mock LocalStorageMediator instance that this service uses. Because it is not an
injected dependency the best way to mock it will be with the spyOn() function provided by Jasmine, 
to intercept the calls to its load() and save() methods and get them to return whatever I want. 

I will need to work out the best way to test the observable bookmarks$ exposed by this service. I
will need to test it after each action to ensure that the value it emits is what it should be.
Do I subscribe to the observable in my test code and just check the value it emits? 




*/


xdescribe('BookmarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkService = TestBed.get(BookmarkService);
    expect(service).toBeTruthy();
  });
});
