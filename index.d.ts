/** Declaration file generated by dts-gen */

export class rk4 {
  constructor(
    y0: number[],
    dydt: (y:number[], t:number) => number[],
    t: number,
    dt: number);

  step(n: number): void;

  y: number[];
}

export class euler {
  constructor(
    y0: number[],
    dydt: (y:number[], t:number) => number[],
    t: number,
    dt: number);

  step(n: number): void;

  y: number[];
}
