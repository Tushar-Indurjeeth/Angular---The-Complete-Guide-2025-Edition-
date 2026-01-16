export interface TicketInterface {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}
