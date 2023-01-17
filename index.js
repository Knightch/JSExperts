add = (a, b) => ( a+b );
add2 = a => a+ 7;
sayHi = () => console.log('hii aman')


console.log(add(4, 5));
console.log(add2(5));
sayHi()

const loc = {
    country: "India",
    city: "Bangaluru",
    teams: ["Chaitra Rao", "Guruprasad Rao", "Aman Pandey"],
    getInfo: function(){
        console.log(`Current location is ${this.city}, ${this.country}`);
    },
    getTeamMembers: function(){
        this.teams.map((teams)=>{
            console.log(`${teams} from ${this.city}, ${this.country}`)
        })
    }
}

loc.getInfo();
loc.getTeamMembers();

// es-5
multiply = (a,b)=>{
    a = a !== undefined ? a : 1;
    b = b !== undefined ? b : 1;
    return a *b;
}
//  es -6
multiply1 = (a, b=1) => a*b;