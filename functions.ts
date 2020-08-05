// function add(x: number, y: number, z: number = 10): number {
// 	if (typeof z === 'number') return x + y + z;
// 	else return x + y;
// }

import { number } from 'prop-types';

// let result = add(2, 4, 6);

const add = function (x: number, y: number, z: number = 90): number {
	if (typeof z === 'number') return x + y + z;
	else return x + y;
};

const add2: (x: number, y: number, z?: number) => number = add;

let str = 'hello';

str = 8;
