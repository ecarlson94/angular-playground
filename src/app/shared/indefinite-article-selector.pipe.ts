import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indefiniteArticleSelector',
})
export class IndefiniteArticleSelectorPipe implements PipeTransform {
  transform(value: string): string {
    const regex = new RegExp('^[aeiouy]');
    return regex.test(value) ? 'an' : 'a';
  }
}
