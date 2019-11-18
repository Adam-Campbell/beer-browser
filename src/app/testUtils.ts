import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/*

Replace second arg with options object. Keep returnFull as property on that object, add a `multi` property
as well, and when true use queryAll instead of query.

*/

interface Options {
    returnFull?: boolean;
    multi?: boolean
}

const defaults: Options = {
    returnFull: false,
    multi: false
};

export const getNativeElFromCSS = <T>(fixture: ComponentFixture<T>) => (cssQuery: string, options: Options = {}) => {
    const opts = { ...defaults, ...options };
    const { returnFull, multi } = opts;

    if (multi) {
        let debugArr = fixture.debugElement.queryAll( By.css(cssQuery) );
        return returnFull ? debugArr : debugArr.map(d => d.nativeElement);
    } else {
        const debug = fixture.debugElement.query( By.css(cssQuery) );
        return returnFull ? debug : debug.nativeElement;
    }
}