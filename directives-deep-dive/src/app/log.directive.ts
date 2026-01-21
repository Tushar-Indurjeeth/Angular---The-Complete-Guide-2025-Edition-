import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLogDirective]',
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  private elementRef = inject(ElementRef);
  constructor() {}

  onLog() {
    console.log('CLICKED');
    console.log(this.elementRef.nativeElement);
  }
}
