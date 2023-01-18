class Watch {
    constructor(options) {
        this.brand = options.brand
    }

    time() {
        console.log(new Date(Date.now()).toLocaleDateString())
    }
}

class SmartWatch extends Watch {
    constructor(options) {
        super(options) // same as Watch.call(this, options)
        this.type = 'Smart';
    }

    steps() {
        console.log(Math.floor(Math.random() * 10000))
    }
}

var w = new Watch({
    brand: 'Rolex'
});
var sm = new SmartWatch({
    brand: 'Boat'
});
console.log('W watch brand:- ' + w.brand)
console.log('W watch time:- ' + w.time())
console.log('sm watch brand:- ' + sm.brand)
console.log('sm watch time:- ' + sm.time())
console.log('sm watch type:- ' + sm.type)
console.log('sm watch showing steps:- ' + sm.steps())