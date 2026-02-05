//create a function which accept 1 parameter --> either number array,string array and return the length of the array

type numOrStr=number|string
function FirstValue(arg:numOrStr[]){
    return arg[0];
}
let val=FirstValue(["A","BBB","C"]);
// val.toLowerCase(); --> error because val is of type number|string and common functions of both types are available

//using generics--> to preserve type
function FirstValue2<T>(arg:T[]){
    return arg[0];
}
let val2=FirstValue2<string>(["A","BBB","C"]);
val2?.toLowerCase();
let val3=FirstValue2<number>([1,2,3]);
val3?.toString();

//what does ? mark
interface User{
    name:string;
    age:number;
    phone?:number;  //?--> used to make the property optional
}
let u1:User={
    name:"John",
    age:30,
    // phone:1234567890
}
console.log(u1.phone);
