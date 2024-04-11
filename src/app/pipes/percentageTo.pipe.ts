import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageTo'
})
export class PercentageToPipe implements PipeTransform {

  transform(value: number, base: number): string {
    const result = value / base * 100
    return result.toFixed(2);
  }
}
