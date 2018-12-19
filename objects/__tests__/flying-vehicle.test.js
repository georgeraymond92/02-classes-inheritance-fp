'use strict';

const flyingVehicle = require('../flying-vehicles-class.js');

describe('Flying Vehicles', () => {
  describe('Airplane', () => {
    let Airplane = new flyingVehicle.Airplane( 'hellcat' );

    it('is and airplane', () => {
      expect(Airplane.type).toEqual('airplane');
    });

    it('can fly', () => {
      expect(Airplane.fly()).toEqual('flying');
    });

    it('can land', () => {
      expect(Airplane.land()).toEqual('landing');
    });
  });

  describe('Helicopter', () => {
    let Helicopter = new flyingVehicle.Helicopter('whirlybird');

    it('can fly', () => {
      expect(Helicopter.fly()).toEqual('flying');
    });

    it('can land', () => {
      expect(Helicopter.land()).toEqual('landing');
    });

    it('is named whirlybird', () => {
      expect(Helicopter.name).toEqual('whirlybird');
    });

  });
});