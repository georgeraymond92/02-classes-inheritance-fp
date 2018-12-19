'use strict';

class vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'moving forward';
  }
  stop(){
    return 'Stopping';
  }
}

class Car extends vehicle {
  constructor(name,wheels){
    super(name, 4);
  }
}

class Motorcycle extends vehicle {
  constructor(name,wheels){
    super(name,2);
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car,Motorcycle};
