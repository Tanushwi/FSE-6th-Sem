"use strict";
//create a function which accept 1 parameter --> either number array,string array and return the length of the array
Object.defineProperty(exports, "__esModule", { value: true });
function FirstValue(arg) {
    return arg[0];
}
let val = FirstValue(["A", "BBB", "C"]);
// val.toLowerCase(); --> error because val is of type number|string and common functions of both types are available
//using generics--> to preserve type
function FirstValue2(arg) {
    return arg[0];
}
let val2 = FirstValue2(["A", "BBB", "C"]);
val2?.toLowerCase();
let val3 = FirstValue2([1, 2, 3]);
val3?.toString();
let u1 = {
    name: "John",
    age: 30,
    // phone:1234567890
};
console.log(u1.phone);
//# sourceMappingURL=index.js.map