type Customer = {
    birthday?: Date;
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null: { birthday: new Date() }
}

let customer = getCustomer(1);
//Optional chaining access operator
console.log(customer?.birthday?.getFullYear()); //This piece of code get executed only if we have a customer that is not null or undefined

//optional element access operator
//customer?.[0]

//optional call
let log: any = null
log?.("a")