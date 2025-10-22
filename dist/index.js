let name = 'Bhanuprakash';
let age = 25;
let isNonIndian = false;
let dynamicTyoe = 'CharSequence';
dynamicTyoe = 59;
let ids = [1, 2, 3, 4, 5, 6];
ids.push(7);
//tuple
let person = [45, 'bhanu', true];
//tuple array
let employees = [
    [1, 'bhanu'],
    [2, 'vishnu'],
    [3, 'praveen']
];
console.log(employees);
//Union
let constValue = "Value";
//Enum
var directions1;
(function (directions1) {
    directions1[directions1["NORTH"] = 0] = "NORTH";
    directions1[directions1["SOUTH"] = 1] = "SOUTH";
    directions1[directions1["EAST"] = 2] = "EAST";
    directions1[directions1["WEST"] = 3] = "WEST";
})(directions1 || (directions1 = {}));
var directions2;
(function (directions2) {
    directions2["NORTH"] = "UP";
    directions2["SOUTH"] = "DOWN";
    directions2["EAST"] = "LEFT";
    directions2["WEST"] = "RIGHT";
})(directions2 || (directions2 = {}));
//assign it here to make it clear
let myBio = {
    myName: 'Bhanuprakash',
    myAge: 25,
    myCountry: 'India'
};
console.log(myBio);
//Type Assertions
let variable = 10;
variable = 'bhanu';
let fixedtype = variable;
// let fixedtype =  variable as number;
// fixedtype = 'sd';
console.log(" variable type " + fixedtype);
//Functions
function add(x, y) {
    return x + y;
}
let sum = add(1, 3);
console.log(sum);
//Void Function
function log(message) {
    console.log(message);
}
log(1);
let myBio1 = {
    name: 'Bhanuprakash',
    age: 25,
    country: 'India'
};
let add1 = (a, b) => a + b;
let sub = (a, b) => a - b;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const obj1 = new Person(1, 'Bhanu');
const obj2 = new Person(2, 'Vishnu');
console.log(obj1.register());
obj1.id = 67;
obj1.name = 'Praveen';
console.log(obj1.register());
const firstH1 = document.querySelector("h1");
if (firstH1) {
    firstH1.innerText = "My First TypeScript Application";
}
// let divContent = document.getElementsByTagName("h1");
// let firstH1 = divContent[0];
// firstH1!.innerHTML = "My First JavaScript Application";
let newH2 = document.createElement('h2');
firstH1 === null || firstH1 === void 0 ? void 0 : firstH1.appendChild(newH2);
newH2.innerText = `${name} ${age} ${isNonIndian}`;
let newH3 = document.createElement('h3');
firstH1 === null || firstH1 === void 0 ? void 0 : firstH1.appendChild(newH3);
newH3.innerText = `${myBio.myName} ${myBio.myCountry}`;
let newH4 = document.createElement('h4');
firstH1 === null || firstH1 === void 0 ? void 0 : firstH1.appendChild(newH4);
newH4.innerText = `${employees}`;
export {};
//# sourceMappingURL=index.js.map