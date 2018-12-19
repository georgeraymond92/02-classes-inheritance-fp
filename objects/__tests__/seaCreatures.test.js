'use strict';

const seaCreatures = require('../seaCreatureFactory');

describe('Sea Creatures Tests', () => {
  describe('Lobster', () => {

    let Lobster = new seaCreatures.Lobster( 'red' );

    it('should return the lobsters name', () => {
      expect(Lobster.name).toEqual('red');
    });

    it('should return bubbles', () => {
      expect(Lobster.bubble()).toEqual('bubble bubble.');
    });

    it('should return just keep swimming', () => {
      expect(Lobster.swim()).toEqual('just keep swimming..');
    });

    it('should return I taste better..', () => {
      expect(Lobster.dunkInButter()).toEqual('I taste better with butter');
    });

  });

  describe('Fish', () => {

    let Fish = new seaCreatures.Fish( 'nemo' );

    it('should return the name of fish', () => {
      expect(Fish.name).toEqual('nemo');
    });

    it('should return bubbles', () => {
      expect(Fish.bubble()).toEqual('bubble bubble.');
    });

    it('should return just keep swimming', () => {
      expect(Fish.swim()).toEqual('just keep swimming..');
    });

    it('should return I taste better..', () => {
      expect(Fish.BatterAndFry()).toEqual('Here is some tartar');
    });

  });
});