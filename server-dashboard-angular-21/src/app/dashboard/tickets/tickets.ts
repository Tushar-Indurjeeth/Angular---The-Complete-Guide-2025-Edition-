import { Component, signal } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketInterface } from './ticket-interface';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets = signal<TicketInterface[]>([]);
  currentData = this.tickets();

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: TicketInterface = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.set([...this.currentData, ticket]);
  }

  onCloseTicket(id: string) {
    this.tickets.update((tickets) =>
      tickets.map((ticket) => (ticket.id === id ? { ...ticket, status: 'closed' } : ticket))
    );
  }
}
