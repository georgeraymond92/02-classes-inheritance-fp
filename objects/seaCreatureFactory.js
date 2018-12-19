'use strict';

const bubble = () => {
  return 'bubbles begin to rise';
};

const swim = () => {
  return 'just keep swimming';
};

function LobsterFactory(name) {
  let Lobster = Object.assign(
    {},
    {name},
    {isRed:true},
    bubble(),
    swim()
  );

  function dunkInButter() {
    return 'I taste better with butter';
  }
}

function FishFactory(name) {
  let Fish = Object.assign(
    {},
    {name},
    {hasGills:true},
    bubble(),
    swim()
  );
  function BatterAndFry() {
    return 'Here is some tartar';
  }
}

module.exports = {FishFactory, LobsterFactory};