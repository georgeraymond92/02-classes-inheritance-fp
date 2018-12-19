'use strict';

const vehiclemethods = (name) => ({
  name: name,
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  },
});


function Car(name) {
  let Car = Object.assign(
    {},
    {wheels:4},
    vehiclemethods(name)
  );
  return Car;
}


function Motorcycle(name){
  let Motorcycle = Object.assign(
    {},
    {wheels:2},
    {wheelie},
    vehiclemethods(name)
  );
  function wheelie(){
    return 'Wheee!';
  }
  return Motorcycle;
}

module.exports = {Car, Motorcycle};


