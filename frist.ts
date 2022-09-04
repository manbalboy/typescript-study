const a = 5;
const b = '5';
const c = true;
const d = undefined;
const e = null;

// any 는 없다
const f: any = '123' || 123;

function add(x: number, y: number): number {
	return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;
type Add = (x: number, y: number) => number;

const add3: Add = (x, y) => x + y;

interface Add2 {
	(x: number, y: number): number;
}

const add4: Add2 = (x, y) => x + y;

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 11 };

const arr: string[] = ['123', '456'];
const arr2: number[] = [123, 367];
const arr3: Array<number> = [123, 333];
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

const enum Tffest {
	UP = '123',
	test = '222',
}

const UP = Tffest.UP;
