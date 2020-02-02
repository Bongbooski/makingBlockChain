// interface Human {
//     name: string,
//     gender: string,
//     age: number
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const name = "Booski",
    age = 28,
    gender = "male";

const hun = new Human("Hun", 20, "male");
// const person = {
//     name: "park",
//     gender: "male",
//     age: 22
// }

// const sayHi = (name:string, age:number, gender:string):string => {
//     return `Hello ${name}, your are ${age}, you are a ${gender}!`;
// };

const sayHi = (person: Human):string => {
    return `Hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
};

// console.log(sayHi(name, age, gender));
console.log(sayHi(hun));

export{};