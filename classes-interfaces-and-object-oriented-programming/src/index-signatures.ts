class SeatAssignment {
  // A1, A2...
  // Thanh, Max...
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Thanh";
seats["A1"] = "Thanh";
seats.A2 = "Max";
