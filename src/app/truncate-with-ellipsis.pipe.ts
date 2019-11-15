import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWithEllipsis'
})
export class TruncateWithEllipsisPipe implements PipeTransform {

  transform(value: string, limit = 200): string {
    // If value is less than limit then no truncating required
    if (value.length < limit) {
      return value;
    } else {
      // Otherwise find the maximum index that the slice can end at according to
      // limit (accounting for ellipsis) and then walk backwards through the string
      // until encountering a space, so that it doesn't cut off a word halfway thro...
      let endIdx = limit - 2;
      while (endIdx > 0 && value.charAt(endIdx) !== ' ') {
        endIdx--;
      }
      return `${value.slice(0, endIdx)}...`;
    }
  }

}
