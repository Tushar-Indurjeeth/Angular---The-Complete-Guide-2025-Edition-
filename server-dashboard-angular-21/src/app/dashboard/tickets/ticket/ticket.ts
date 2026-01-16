import { Component, input, output, signal } from '@angular/core';
import { TicketInterface } from '../ticket-interface';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketInterface>();
  close = output();

  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
