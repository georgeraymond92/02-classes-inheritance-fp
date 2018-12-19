'use strict';

const drive = () => {
  return 'Moving Forward';
};
const stop = () => {
  return 'Stopping';
};


function Car(name) {
  let Car = Object.assign(
    {},
    {name},
    {wheels:4},
    drive(),
    stop()
  );
}


function Motorcycle(name){
  let Motorcycle = Object.assign(
    {},
    {name},
    {wheels:2},
    {wheelie},
    drive(),
    stop()
  );
  function wheelie(){
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};


