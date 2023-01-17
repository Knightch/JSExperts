// object 
const obj = {
    firstName: "Aman",
    secondName: "Pandey",
    age: 25,
    location: "Bengaluru",
    country: "India"
}

const objFunc = (obj)=>{
    const name = `${obj.firstName} ${obj.secondName}`;
    console.log(name)
}
const destructureObjectFunc = ({firstName, secondName, ...restPart})=>{
    console.log(`destructure object ${firstName} ${secondName}`)
    console.log(`${restPart}`)
}

objFunc(obj)
destructureObjectFunc(obj)

// array
const arr = ['Aman','Pandey',25,'Bengaluru','India'];
const arrFunc = (arr)=>{
    console.log(`my name is ${arr[0]} ${arr[1]}`);
}
const destructureArrayFunc = ([firstName, lastName,...restPart])=>{
    console.log(`In destructure array my name is ${firstName} ${lastName}`);
    console.log(`also use case of spread operators:-  ${restPart}`);
}
arrFunc(arr)
destructureArrayFunc(arr)

