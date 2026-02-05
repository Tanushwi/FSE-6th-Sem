//type narrowing
//runtime value dependency 
function upperCase(arg:number|string){
    if(typeof arg=="string")
    {
        return arg.toUpperCase();
    }
    else{
        return arg;
    }
    // return arg.toUpperCase(); //error because arg can be number or string and toUpperCase is only available for string
}
upperCase("abbb"); //works fine


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
function getPhone(arg:User):number{
    if("phone" in arg) //agr argument me phone property hai to uska value return karo otherwise 0 return karo
        return arg.phone;
    else
        return 0;
}
let result:number=getPhone(u1);
// console.log(result);

interface Person{
    role:string;
    permission?:string[]
}
let user:Person={
    role:"user"
}
let admin:Person={
    role:"admin",
    permission:["write","delete","update"]
}
function writeBlog(user:Person):string{
    if("permission" in user){
        let permission=user.permission;
        if(permission.includes("write")){
            return "blog is written";
        }
    }
    return "no authorize";
}
writeBlog({role:"user"});

type success={
    status:"200",
    data:[]
}
type error={
    status:"400",
    message:""
}
type ApiResponse=success|error;
function sendResponse(response:ApiResponse){
    if(response.status=="200"){ //agr status 200 hai to data property available hai
        return response.data;
    }
    else{ //agr status 400 hai to message property available hai
        return response.message;
    }
}
