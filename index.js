// 1) Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters 
function acceptTwoA(a, b) {
    if (arguments.length !== 2) {
        throw "Function must be called with exactly 2 parameters!";
    }
    console.log(a, b)
}
acceptTwoA(20, 10)
// acceptTwoA(20)
// acceptTwoA(30, 40, 50)

console.log("=========================================")
// 2)  Create an adding function that adds n numbers only. Throw exception if the user passed any data type other than “number” or called your function without passing any parameters. 
function addNumbers() {
    if (arguments.length === 0) {
        throw "You must pass at least one number.";
    }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        if (typeof value !== "number") {
            throw"All parameters must be numbers.";
        }
        sum += value;
    }

    console.log(sum)
}

addNumbers(1, 2);
addNumbers(2);
// addNumbers();
// addNumbers("1");
console.log("=========================================")

// 3) Write two different function with two different forms implementations that takes any number of parameters and returns them reversed using array’s reverse function.
function revArr() {
    let arr = Array.from(arguments);
    console.log(arr.reverse())
}
revArr(1,2,3);
revArr(1,2,"car");
// -----------------------------------

function revArg() {
    console.log([].reverse.call(arguments))
}
revArg(1,2,3);
revArg(1,2,"car");
console.log("=========================================")

// 4 
let student = {
    name: "Ghada",
    age: 24,
    getSetGen: function () {
        Object.keys(this).forEach(prop => {
            let capitalized = prop.charAt(0).toUpperCase() + prop.slice(1)
            this["get" + capitalized] = function () {
                return this[prop];
            };
            this["set" + capitalized] = function (value) {
                this[prop] = value;
            };
        });
    }
};
student.getSetGen();

console.log(student.getName());  
student.setName("Alaa");        
console.log(student.getName()); 

console.log(student.getAge());
student.setAge(30);
console.log(student.getAge());