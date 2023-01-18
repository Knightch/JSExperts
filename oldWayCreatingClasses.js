// watch
function Watch(options) {
    this.brand = options.brand;
}

Watch.prototype.time = function () {
    console.log(new Date(Date.now()).toLocaleString())
}

function SmartWatch(options) {
    Watch.call(this, options) // calling watch class in smartwatch class
    this.type = 'Smart';
}
SmartWatch.prototype = Object.create(Watch.prototype);  // create copy of watch prototype and it name the constructor to watch 
SmartWatch.prototype.constructor = SmartWatch; // here rename the constructor name watch to smartwatch

SmartWatch.prototype.steps = () => {
    console.log(Math.floor(Math.random() * 10000))
}


var w = new Watch({
    brand: 'Rolex'
});
var sm = new SmartWatch({
    brand: 'Boat'
})

console.log('W watch brand:- ' + w.brand)
console.log('W watch time:- ' + w.time())
console.log('sm watch brand:- ' + sm.brand)
console.log('sm watch time:- ' + sm.time())
console.log('sm watch type:- ' + sm.type)
console.log('sm watch showing steps:- ' + sm.steps())