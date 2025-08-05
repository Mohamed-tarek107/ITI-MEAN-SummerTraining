"use strict";
//1
Object.defineProperty(exports, "__esModule", { value: true });
//A- Types
var x = 'Tarek';
var age = 19;
var student = true;
var myname = 'Mohamed';
//arrays
var arr = [1, 2, 3, 4, 5, 5];
var anyArr = ['Tarek', 1, true, 5, 19];
//tuples//array with specific types
var user = ['Mohamed', 18];
//B- Union types
var id;
id = 123123;
id = 'meoamdiwmdi';
//C- functions with type
function order(customer, order, id) {
    return "Order made to ".concat(customer, " contains: ").concat(order, " with id: ").concat(id);
}
;
order("tarek", "shirt", 1234);
//-- optional parameters
function greet(name, id) {
    return "Hello, ".concat(name, " With ID: ").concat(id || 'not found');
}
greet("tarek");
//D- enums
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
console.log(Role.Admin); // output -> admin
//E-Generics
function printer(sth) {
    return "printed: ".concat(sth);
}
printer('YES');
printer(123);
printer(true);
//F(Bouns) - Decorators
//G-modules
var exporter_1 = require("./exporter");
(0, exporter_1.access)('admin');
