function elias(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }

function anyUse(name: any) {
    name.canCallAnything(); // this is undefined but does not raise compiler error
    return name;
}

function stringAnnotation(name: string): string {
    return `My name is ${name}`;
}

async function ageCalculator(age: number): Promise<number> {
    return age;
}


/* how do annonymous functions behave in typescript */
let names: Array<string> = ["Bob", "Njeri", "Wacuka", "Ciku"]

names.forEach(element => {
    console.log(element.toUpperCase());
});

// annonymous functions also get type checking.

/*
Object types
*/

type Student = {
    age: number;
    admissionNumber: number
    admissionMarks: number
}

function studentAgeCalculator(student: Student) {
    return 20 + student.age;
}

studentAgeCalculator(
    {
        age: 13,
        admissionMarks: 400,
        admissionNumber: 12569
    }
)

type ID = number | string; 

interface Vehicle {
    wheels: number;
    color: string;
}

function getVehicleColor(vehicle: Vehicle) {
    return vehicle.color;
}

getVehicleColor({wheels: 4, color: 'green'})

// Interface can be extended while type can be extended via intersection 

interface CarModel extends Vehicle {
    model: string;
}

function carModel(carModel: CarModel) {
    return carModel.model;
}

carModel({model: "Hiace", color: "White", wheels: 4})

const myPageBody = document.getElementById("body") as HTMLBodyElement;
const myPageBody2 = <HTMLBodyElement>document.getElementById("body");


// funny moments

let x: "x" = "x";
// x = "something" this fails while the statement below continues to work
x = "x"


function a_or_b(name: string): 1 | 2 {
    return name == 'elias' ? 1 : 2
}

let number_selected: number = a_or_b("elias");

type SomeConstructor = {
    new (s: string, age: number) :  {

    };
}

function fn(ctor: SomeConstructor) {
    return new ctor("Hello", 12);
}


class School {
    name: string;

    constructor(name) {
        this.name = name;
    }

    schoolName() {
        return this.name;
    }
}

let school = new School("Mangu High School");
school.schoolName();

/* class with readonly prefixed fields means that the field cannot be 
reassigned away from the constructor */

class Dormitory {
    readonly name : string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        // this should raise an error
        // this.name = 'GOK';
        return this.name;
    }
}


// Class extensions 

class Base {
    k = 4
}

class Derived extends Base { 

    constructor() {
        super();
        console.log(this.k);
    }
}

class Greeter {

    protected readonly name: string;

    constructor(name) {
        this.name = 'hi'
    }
    
    protected getName() {
        return this.name
    }

}

class SpecialGreeter extends Greeter {

    constructor(name) {
        super(name)
    }

    protected getName(): string {
        return this.getName()
    }
}

let specialGreetings = new SpecialGreeter("Hello World")
// protected means thats getName is only accessible by SpecialGreeter and its subclasses
// specialGreetings.getName();
// specialGreetings.name


// Static members of a class are accesible not on a instance of a class, but on the class constructor object
// itself

class Continent {

    static hasLand() {
        return true
    }

    getName() {
        return "name"
    }

}


export enum Rank {
    Junior,
    Senior
}

// can be called on the class itself
console.log(Continent.hasLand());

export default Continent;
export var pi = 3.14;