

//^ tuples
let id:number = 5;
// id = '5'; // error cuz types cant be changed
console.log(`ID: ${id}`);
let company:string  = "some company";
let isPublished : boolean = true;
let x:any = "hello";
x = false;
let ids:number[] = [1,2,3,4,5]
// ids.push("hello"); //error cuz this is not a number type

//^ tuples
let person:[string, number,string] = ["Utsav", 21, "Wells"];
let employee: [number,string][] = [
    [21, "Utsav"],
    [21, "Utsav"],
    [21, "Utsav"],
]


//^ Unions
let id_union:string|null = "Utsav";

//^ Enum
enum Directions {up, down, left, right};
console.log(Directions.up)
enum Directions_new {up=1, down=2, left=3, right=4};
console.log(Directions_new.up)

//^ Objects
type User = {
    name:string,
    age:number
};
const user : User = {
    name: "Utsav", age : 21
}
console.log(user)


//^ Type Assertion
let cid:any = 21;
// let customerAge:number = cid as number; // this works as well
let customerAge:number = <number>cid ;

//^ Functions
function addNumbers(x:number, y:number):number{
    return x + y;
}
console.log(addNumbers(2,4))

function log(message:string|number):void{
    console.log(`Message:${message}`)
}

//^ Interface
interface UserInterface {
    readonly id:number,
    name:string, 
    age:number,
    employementStatus?:boolean
}
const user1:UserInterface={
    id:123,
    name:"Utsav",
    age:21
}

interface MathFunction {
    (x:number, y:number):number
}
const multiplyFunc:MathFunction = (x:number,y:number):number=>x*y;
console.log(multiplyFunc(1,2))

// Classes
class Person{
    private id: number;
    private name:string;

    constructor(id:number, name:string){
        console.log("Creating Person")
        this.id = id;
        this.name=name;
        console.log("Created Person")
    }
    register(){
        console.log(`Person named ${this.name} is ready.`)
    }
}

const Utsav:Person  = new Person(123,"Utsav");   
Utsav.register();

