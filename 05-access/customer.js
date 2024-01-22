var customer = /** @class */ (function () {
    function customer(firstn, lastn) {
        this.firstn = firstn;
        this.lastn = lastn;
    }
    return customer;
}());
//let's create an instance 
/*
 let myCustomer = new customer("martin","dixon");



console.log(myCustomer.firstn);
console.log(myCustomer.lastn);

*/
var myCustomer = new customer("martin", "dixon");
console.log(myCustomer.firstn);
console.log(myCustomer.lastn);
