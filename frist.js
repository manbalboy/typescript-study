'use strict';
const a = 5;
const b = '5';
const c = true;
const d = undefined;
const e = null;
// any 는 없다
const f = '123' || 123;
function add(x, y) {
	return x + y;
}
const add2 = (x, y) => x + y;
const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;
const obj = { lat: 37.5, lon: 11 };
const arr = ['123', '456'];
const arr2 = [123, 367];
const arr3 = [123, 333];
const arr4 = [123, 456, '1111'];
console.log(
	a,
	b,
	c,
	d,
	e,
	f,
	add(1, 2),
	add2(1, 2),
	add3(1, 2),
	add4(1, 2),
	obj,
	arr,
	arr2,
	arr3,
	arr4,
);
const UP = '123'; /* Tffest.UP */
