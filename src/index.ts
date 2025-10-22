let name: string = 'Bhanuprakash';
let age: number = 25;
let isNonIndian: boolean = false;

let dynamicTyoe: any='CharSequence';

dynamicTyoe=59;


let ids: number[] = [1,2,3,4,5,6];

ids.push(7);

//tuple
let person: [number,string,boolean] = [45,'bhanu',true];

//tuple array
let employees: [number,string][] = [
    [1,'bhanu'],
    [2,'vishnu'],
    [3,'praveen']
]; 

console.log(employees);

//Union

let constValue: string | number = "Value";

//Enum
enum directions1 {
    NORTH,
    SOUTH,
    EAST,
    WEST
}

enum directions2 {
    NORTH='UP',
    SOUTH='DOWN',
    EAST='LEFT',
    WEST='RIGHT'
}

//Object

//setup type
type User = {
    myName: string,
    myAge: number,
    myCountry: string
}
//assign it here to make it clear
let myBio: User = {
    myName: 'Bhanuprakash',
    myAge: 25,
    myCountry: 'India'
}

console.log(myBio);


//Type Assertions

let variable: any=10;
variable = 'bhanu';
let fixedtype = <number> variable;
// let fixedtype =  variable as number;

// fixedtype = 'sd';

console.log(" variable type "+fixedtype );


//Functions
function add(x: number,y: number): number{
    return x+y;
}

let sum=add(1,3);
console.log(sum);

//Void Function
function log(message: string | number ): void{
   console.log(message);
}

log(1);

//Interfaces
interface bioInterface{
    readonly name: string, //readonly
    age: number,
    country: string,
    religion?: string //optional ?
}
let myBio1: bioInterface = {
    name: 'Bhanuprakash',
    age: 25,
    country: 'India'
}


//Interfaces with functions

interface MathFunc{
    (x: number,y: number):number;
}
let add1: MathFunc=(a: number,b: number): number => a+b;
let sub: MathFunc=(a: number,b: number): number => a-b;



interface PersonInterface{
    id: number;
    name: string;
    age: number;
    register(): string;
}


//Classes
class Person implements PersonInterface {
    id:number;
    name:string;
    age: number;
    constructor(id: number, name: string,age: number){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    register():string {
        return `${this.name} is now registered`;
    }
}

const obj1 = new Person(1,'Bhanu',26);
const obj2 = new Person(2,'Vishnu',29);

// console.log(obj1.register());
// obj1.id=67;
// obj1.name='Praveen';
// console.log(obj1.register());

class Employee extends Person{

    position: string;

    constructor(id: number, name: string,age: number,position: string){
        super(id,name,age);
        this.position=position;
    }
}


//Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray=getArray<number>([1,2,3,4,5,6]);
let strArray=getArray<string>(['Bhanu','Vishnu','Praveen']);

// numArray.push('Bhanu');
// strArray.push(3);



const firstH1 = document.querySelector("h1");
if(firstH1){
    firstH1.innerText = "My First TypeScript Application";
}
// let divContent = document.getElementsByTagName("h1");
// let firstH1 = divContent[0];
// firstH1!.innerHTML = "My First JavaScript Application";

let newH2=document.createElement('h2');
firstH1?.appendChild(newH2);

newH2.innerText= `${name} ${age} ${isNonIndian}`;



let newH3=document.createElement('h3');
firstH1?.appendChild(newH3);

newH3.innerText= `${myBio.myName} ${myBio.myCountry}`;

let newH4=document.createElement('h4');
firstH1?.appendChild(newH4);

newH4.innerText= `${employees}`;


