type Emloyee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Emloyee = {
  id: 1,
  name: "Thanh",
  retire: (date: Date) => {
    console.log(date);
  },
};
