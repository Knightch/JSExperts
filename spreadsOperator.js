const arg = [1, 2, 3];
const arg2 = [4, 5, 6];

const obj = {
    firstName: "Aman",
    secondName: "Pandey",
    age: 25,
    location: 'Bengaluru'
}

const obj2 = {
    country: "India"
}

const sum = (a, b, c) => a + b + c


// function argument 
console.log(sum(...arg2))
// clone an array or object
const cloneArrayargInTraditionalWay = [].concat(arg) // tradional way
const cloneArrayargUsingSpreadOperator = [...arg] // using spread operators
const cloneObjUsingSpreadOperator = {...obj} // using spread operators
console.log("clone array using traditional way:- ",cloneArrayargInTraditionalWay)
console.log("clone array using spread operators:- ",cloneArrayargUsingSpreadOperator)
console.log("clone object using spread operators:- ",cloneObjUsingSpreadOperator)
// merge an array or object
const mergeArrayArgAndArg2 = [...arg,...arg2];
const mergeObjectObjAndObj2 = {...obj,...obj2};
console.log("merge array using spread operators:- ",mergeArrayArgAndArg2)
console.log("merge object using spread operators:- ",mergeObjectObjAndObj2)
