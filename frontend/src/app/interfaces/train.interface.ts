export interface TicketClass {
  id: number;
  class_name: string;
  price: number;
  total_seats: number;
  available_seats: number;
}

export interface Train {
  id: number;
  train_name: string;
  route: string;
  journey_time: string;
  arrival_time: string;
  ticket_classes: TicketClass[]; // Added ticket_classes array
}
