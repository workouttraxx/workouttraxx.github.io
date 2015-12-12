'use strict';

describe('myApp.demo module', function() {

  beforeEach(module('myApp.demo'));

  describe('demo controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var demoCtrl = $controller('demoCtrl');
      expect(demoCtrl).toBeDefined();
    }));

  });
});