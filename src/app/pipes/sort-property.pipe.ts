import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByProperty',
})
export class SortByPropertyPipe implements PipeTransform {
  transform(
    value: any[] | null,
    property: string,
    sort: 'ASC' | 'DESC'
  ): any[] | null {
    return !!value
      ? value.sort((a, b) => {
          if (sort === 'ASC') {
            if (a[property] < b[property]) {
              return -1;
            } else if (a[property] > b[property]) {
              return 1;
            }
          } else {
            if (a[property] > b[property]) {
              return -1;
            } else if (a[property] < b[property]) {
              return 1;
            }
          }
          return 0;
        })
      : value;
  }
}
