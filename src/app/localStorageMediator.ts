import { PersistenceMediator, Beer } from '../types';

export class LocalStorageMediator implements PersistenceMediator {
    save(data: Beer[]): void {
        if (typeof window !== 'undefined' && window.localStorage) {
            const jsonData = JSON.stringify(data);
            localStorage.setItem('beers', jsonData);
        }
    }

    load(): Beer[] {
        if (typeof window !== 'undefined' && window.localStorage) {
            const jsonData = localStorage.getItem('beers');
            return jsonData ? JSON.parse(jsonData) : [];
        } else {
            return [];
        }
    }
}
