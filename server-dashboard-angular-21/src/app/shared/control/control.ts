import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class Control {
  label = input.required<string>();

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
}
