'use strict';

const SeaCreature = (name) => ({
  name: name,
  bubble: () => {
    return 'bubble bubble.';
  },
  swim: () => {
    return 'just keep swimming..';
  },
});

function Lobster(name) {
  let Lobster = Object.assign(
    {},
    {isRed:true},
    {dunkInButter},
    SeaCreature(name)
  );

  function dunkInButter(){
    return 'I taste better with butter';
  }
  return Lobster;
}

function Fish(name) {
  let Fish = Object.assign(
    {},
    {hasGills:true},
    {BatterAndFry},
    SeaCreature(name)
  );
  function BatterAndFry() {
    return 'Here is some tartar';
  }
  return Fish;
}


module.exports = {Fish, Lobster};