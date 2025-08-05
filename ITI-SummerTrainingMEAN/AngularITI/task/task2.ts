
// 1-

//A- Types
let x:any = 'Tarek'
let age:number = 19;
let student:boolean = true;
let myname:string = 'Mohamed';
//arrays
let arr: number[] = [1,2,3,4,5,5];
let anyArr: any[] = ['Tarek',1,true,5,19];
//tuples//array with specific types
let user: [string, number] = ['Mohamed', 18]

//B- Union types
let id: string | number;
id = 123123 
id = 'meoamdiwmdi'

//C- functions with type
function order(customer:string, order:string, id:number){
    return `Order made to ${customer} contains: ${order} with id: ${id}`
};
order("tarek", "shirt", 1234)
//-- optional parameters
function greet(name: string, id?:number){
    return `Hello, ${name} With ID: ${id || 'not found'}`
}
greet("tarek")

//D- enums
enum Role {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}
console.log(Role.Admin) // output -> admin


//E-Generics
function printer<T>(sth: T): any{
    return `printed: ${sth}`
}
printer('YES')
printer(123)
printer(true)



//F(Bouns) - Decorators

//el target da el class /-----> el method name ely howa el method ely haten el decoretor 3leha
//descriptor object feh details ll method

//note: el descriptor.value hayba2a el method nafsaha by save it gowaha 3shan n call it ba3den 

function Logger(target: any, methodname: string, descriptor: PropertyDescriptor){
    const original = descriptor.value // by3mel save llmethod 

    descriptor.value = function (...args: any[]){ // ba2olo ya5od ay arguments fyl method bl spread operator ...
        console.log(`${methodname} was called with arguments: ${args}`)
        return original.apply(this,args) // btsh8l el method ely 3mlnalha save fo2 w t apply -> 3shan tsht8l bl args bta3tha
    }
}

class Person {
    user1:string;

    constructor(name:string){
        this.user1 = name
    }

    @Logger //el decoretor
    greeting(greeting:string){
        console.log(`${greeting}. my name is ${this.user1}`)
    }
}

const p = new Person("Tarek");
p.greeting("Hi")// ->  hi my name is tarek   





//G-modules
import { access } from "./exporter";
access('admin') //success
access('guest') //fail



// 2-

class Point2D{
    x:number
    y:number

    constructor(point1:number, point2:number){
        this.x = point1;
        this.y = point2;
    }

    calculator(){
        return Math.sqrt(this.x**2 + this.y**2)
    }
}


class Point3D extends Point2D{
    z:number

    constructor(x:number,y:number,z:number){
        super(x,y)
        this.z = z
    }


    calculator(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2)
    }
}