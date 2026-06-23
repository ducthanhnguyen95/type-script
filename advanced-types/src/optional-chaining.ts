type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) console.log(customer.birthday);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());
customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customer !== null  && customer !== undefined)
//     customer[0]
// customer?.[0]

// Optional call
// let log : any = (message:string) => console.log(message);
let log: any = null;
// log('a');
log?.("a");
