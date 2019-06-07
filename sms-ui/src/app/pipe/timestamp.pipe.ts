import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'showTimestamp'
})
export class TimestampPipe implements PipeTransform {
    temp: Date;

    transform(value: Date): string {
      if (!value) { return null; }
      const temp = new Date (value);
      return temp.toDateString();
    }
}
