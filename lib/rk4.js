"use strict";

// Construct a new RK4 object with the provided initial conditions and timestep.
function _rk4(y0, dydt, t, dt) {
  this.y = y0.slice(0);
  this.dydt = dydt;
  this.t = t;
  this.dt = dt;

  this.n = this.y.length;

  this.calcStep = function() {
    var _y = new Array(this.n);
    var i = 0;

    var k1 = this.dydt(this.y, this.t);

    for (i = 0; i < this.n; i++) {
      _y[i] = this.y[i] + k1[i] * this.dt * 0.5;
    }
    var k2 = this.dydt(_y, this.t + this.dt * 0.5);

    for (i = 0; i < this.n; i++) {
      _y[i] = this.y[i] + k2[i] * this.dt * 0.5;
    }
    var k3 = this.dydt(_y, this.t + this.dt * 0.5);

    for (i = 0; i < this.n; i++) {
      _y[i] = this.y[i] + k3[i] * this.dt;
    }
    var k4 = this.dydt(_y, this.t + this.dt);

    for (i = 0; i < this.n; i++) {
      this.y[i] += this.dt / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
    }
    this.t += this.dt;
  };
}

// Iterate n steps of time dt (default is 1)
_rk4.prototype.step = function(n) {
  n = (typeof n !== 'undefined') ?  n : 1;

  for(var i = 0; i < n; i++)
    this.calcStep();
};

module.exports = _rk4;
