'use strict';

describe('myApp.features module', function() {

  beforeEach(module('myApp.features'));

  describe('features controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var featuresCtrl = $controller('featuresCtrl');
      expect(featuresCtrl).toBeDefined();
    }));

  });
});