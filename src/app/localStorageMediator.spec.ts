import { LocalStorageMediator } from './localStorageMediator';
import { mockBeer } from './mockData';

describe('LocalStorageMediator class', () => {
    let mediator: LocalStorageMediator;

    beforeEach(() => {
        window.localStorage.clear();
        mediator = new LocalStorageMediator();
    });

    afterEach(() => {
        window.localStorage.clear();
        mediator = null;
    });

    it('returns an empty array if the data is not in local storage', () => {
        expect(mediator.load()).toEqual([]);
    });

    it('saves the data to local storage', () => {
        mediator.save([ mockBeer ]);
        const storedBeerData = JSON.parse( localStorage.getItem('beers') );
        expect(storedBeerData).toEqual([ mockBeer ]);
    });

    it('retrieves the data from local storage', () => {
        localStorage.setItem('beers', JSON.stringify([ mockBeer ]));
        expect(mediator.load()).toEqual([ mockBeer ]);
    })
})