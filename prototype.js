function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getInfo = function () {
    console.log(`name: ${this.name}, age: ${this.age}`);
}
const p1 = new Person('Jitu', 27)
const p2 = new Person('Amarjit', 27)
const p3 = new Person('Sujit', 25)
const p4 = new Person('Raj', 22)

console.log("p1 :", p1.getInfo())

const arr = [343, 456, 234, 45];

Array.prototype.first = function (){
    if(this.length){
        console.log(`the first element is ${this[0]}`);
    }else{
        console.error(`the array is empty :(`);
    }
}
console.log(arr.first());