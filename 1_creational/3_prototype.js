const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels, My owner ${this.owner}`);
    }
    
}

const carWithOwner = Object.create(car, {
    owner: {
        value: `Muhammet`
    }
});

carWithOwner.init();

console.log(carWithOwner.__proto__ === car);