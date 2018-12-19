'use strict';

class flyingVehicle {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  fly(){
    return 'flying';
  }
  land() {
    return 'landing';
  }
}

class Helicopter extends flyingVehicle {
  constructor(name){
    super(name, 'helicopter');
  }
}

class Airplane extends flyingVehicle {
  constructor(name) {
    super(name, 'airplane');
  }
}

module.exports = {Helicopter, Airplane};