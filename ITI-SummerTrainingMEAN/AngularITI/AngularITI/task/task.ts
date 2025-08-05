//1

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

