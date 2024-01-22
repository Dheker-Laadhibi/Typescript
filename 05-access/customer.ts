class customer{
 private firstn:string;

private lastn:string;

constructor(firstn:string,lastn:string){


this.firstn=firstn;
this.lastn=lastn;



}
}

//let's create an instance 
/*
 let myCustomer = new customer("martin","dixon");



console.log(myCustomer.firstn);
console.log(myCustomer.lastn);

*/
const myCustomer = new customer("martin", "dixon");

console.log(myCustomer.firstn);
console.log(myCustomer.lastn);









