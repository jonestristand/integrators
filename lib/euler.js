"use strict";

// Construct a new RK4 object with the provided initial conditions and timestep.
function _euler(y0, dydt, t, dt) {
  this.y = y0.slice(0);
  this.dydt = dydt;
  this.t = t;
  this.dt = dt;

  this.n = this.y.length;

  this.calcStep = function() {
    var i = 0;

    var _y = this.dydt(this.y, this.t);

    for (i = 0; i < this.n; i++) {
      this.y[i] += this.dt * _y[i];
    }
    this.t += this.dt;
  };
}

// Iterate n steps of time dt (default is 1)
_euler.prototype.step = function(n) {
  n = (typeof n !== 'undefined') ?  n : 1;

  for(var i = 0; i < n; i++)
    this.calcStep();
};

module.exports = _euler;
