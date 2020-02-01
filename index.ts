const name = "Booski",
    age = 28,
    gender = "male";

const sayHi = {name, age, gender} => {
    console.log(`hello ${name}, your are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);
export{};