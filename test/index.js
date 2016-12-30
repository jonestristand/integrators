var expect = require('chai').expect;
var integrators = require('../index');

describe('#rk4', function() {
  var rk;

  it('should compute e^x to 5 decimal digits of accuracy in 100 steps', function() {
    rk = new integrators.rk4([1], function(y,t) { return [y[0]]; }, 0, 0.01);
    rk.step(100);
    expect(rk.y[0]).to.be.within(2.718281, 2.718282);
  });

  it('should compute numeric integrations for multiple equations simultaneously', function() {
    rk = new integrators.rk4([1,1], function(y,t) { return [y[0],-y[1]]; }, 0, 0.01);
    rk.step(1);
    expect(rk.y).to.have.lengthOf(2);
  });

  it('should compute n steps at once', function() {
    var t = 2, n=100, dt=t/n;
    rk = new integrators.rk4([1,1], function(y,t) { return [y[0],-y[1]]; }, 0, dt);
    rk.step(n);
    expect(rk.t).to.be.within(t-dt,t+dt);
  });

});

describe('#euler', function() {

  it('should compute e^x to 1 decimal digit of accuracy in 100 steps', function() {
    var eu = new integrators.euler([1], function(y,t) { return [y[0]]; }, 0, 0.01);
    eu.step(100);
    expect(eu.y[0]).to.be.within(2.7, 2.8);
  });

  it('should compute numeric integrations for multiple equations simultaneously', function() {
    eu = new integrators.euler([1,1], function(y,t) { return [y[0],-y[1]]; }, 0, 0.01);
    eu.step(1);
    expect(eu.y).to.have.lengthOf(2);
  });

  it('should compute n steps at once', function() {
    var t = 2, n=100, dt=t/n;
    eu = new integrators.euler([1,1], function(y,t) { return [y[0],-y[1]]; }, 0, dt);
    eu.step(n);
    expect(eu.t).to.be.within(t-dt,t+dt);
  });

});
