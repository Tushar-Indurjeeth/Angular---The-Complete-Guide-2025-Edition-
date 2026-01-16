import { AfterViewInit, Component, ElementRef, output, viewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; text: string }>();

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form().nativeElement.reset();
  }
}
