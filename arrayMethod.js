const iplTeams2023 = [
    'Gujarat Titans',
    'Mumbai Indians',
    'Punjab Kings',
    'Delhi Capital',
    'Rajesthan Royal',
    'Royal Challengers Bangalore',
    'Sunrise Hydrabad',
    'Chennai Super Kings',
    'Lucknow Supergiants',
    'Kolkata Knight Riders'
]
const typeOfCars = [
    'Coupe',
    'SUV',
    'Station Wagon',
    'Hatchback',
    'Sedan',
    'Convertible',
    'SUV',
    'Station Wagon',
    'Minivan',
    'Supercar',
    'Supercar',
    'Sports Car',
    'Pickup Truck',
    'Station Wagon',
    'SUV',
    'Crossover',
    'Van',
    'Supercar',
    'Station Wagon',
    'Grand tourer',
    'Limousine',
    'Supercar',
    'Station Wagon',
    'Micro Car',
    'City Cars',
    'Sports Utility Vehicles',
    'Muscle'
]
const cpuParts = [{
        components: 'Processors',
        Generation: ['Intel core X-series Processors', 'Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3']
    },
    {
        components: 'RAM',
        Generation: ['SDRAM', 'DDR', 'DDR2', 'DDR3', 'DDR4', 'DDR5']
    },
    {
        components: 'Graphic cards',
        Generation: ['GeForce 50 series', 'GeForce 40 series', 'GeForce 30 series', 'GeForce 20 series and 16 series']
    },
]

const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

/*==============================================================
for each
================================================================*/

iplTeams2023.forEach(team => {
    console.log("IPL Team: ", team)
});

/*==============================================================
map
================================================================*/

cpuParts.map((part) => {
    console.log("CPU Component: ", part.components)
})

//modify cpuparts with generation length using map
const cpuPartWithLengthOfGeneration = cpuParts.map((part) => {
    // part.GenerationsVariations = part.Generation.length; // this way also effect my original array which i doesn't want!
    return {
        ...part,
        GenerationsVariations: part.Generation.length
    } // this will not effect my original array 
})
console.log("New Array with generation length: ", cpuPartWithLengthOfGeneration)

/*==============================================================
filter
================================================================*/

const filterProcessor = cpuParts.filter((c) => c.components === 'Processors') // filter return arrays
console.log('Processors :', filterProcessor)

/*==============================================================
find
================================================================*/

console.log('Processors using find :', cpuParts.find((c) => c.components === 'Processors')) // find return only values

/*==============================================================
reduce
================================================================*/
const sumOfPrimeNumber = primeNumber.reduce((previousValue, currentVaalue, ) => {
    previousValue + currentVaalue
}, );
console.log("Sum of prime number between 0 to 50 is: ", sumOfPrimeNumber)
const reduceOutputOfTypeOfCars = typeOfCars.reduce((previousValue, currentVaalue) => {
    if (previousValue.hasOwnProperty(currentVaalue)) {
        previousValue[currentVaalue] += 1;
    } else {
        previousValue[currentVaalue] = 1;
    }
    return previousValue
}, {})

console.log('new output of typeOfCars with number of same name reapeating: ', reduceOutputOfTypeOfCars)