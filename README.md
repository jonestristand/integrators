# @jones.tristand/integrators
[![NPM version](https://badge.fury.io/js/%40jones.tristand%2Fintegrators.svg)](https://npmjs.org/package/@jonestristand/integrators)

A simple package containing methods for numerical integration of systems of differential equations. Includes a simple Euler integrator and a fourth-order Runge-Kutta (RK4) integrator. This package also includes typings in the package and can be used with TypeScript directly.

## Installation

```sh
$ npm install --save @jones.tristand/integrators
```

## Usage

### JavaScript
```js
var integrators = require('@jones.tristand/integrators');

var y0 = [1, 1];
var dydt = function(y, t) {
  return [
    y[0],   // dydt[0] = y[0]
    y[1]    // dydt[1] = y[1]
  ]
};
var t0 = 0;
var dt = 0.01;

var rk = new integrators.rk4(y0, dydt, t0, dt);

rk.step(100);

console.log(rk.y);
// Output: [ 2.718281828234404, 2.718281828234404 ]
```

### TypeScript
```ts
import { rk4, euler } from '@jones.tristand/integrators';

const y0:number[] = [1, 1];
const dydt = (y:number[], t:number):number[] => {
  return [
    y[0],   // dydt[0] = y[0]
    y[1]    // dydt[1] = y[1]
  ]
};
const t0:number = 0;
const dt:number = 0.01;

var rk = new rk4(y0, dydt, t0, dt);

rk.step(100);

console.log(rk.y);
// Output: [ 2.718281828234404, 2.718281828234404 ]
```

## Testing

```sh
$ npm test
```

## License

MIT © [Tristan Jones](http://www.tdjones.ca)
