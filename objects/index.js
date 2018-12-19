'use strict';


// const Vehicle = require('./constructor.js');
// const Vehicle = require('./vehicle-class.js');
const Vehicle = require('./vehicle-factory.js');

// const seaFactory = require('./seaCreatureFactory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// const oleRed = new seaFactory.Lobster('ole red');
// console.log(oleRed.bubble(), oleRed.swim());