import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
