{
	type A = { a: string };
	const a: A = { a: 'hello' };

	type B = { hello: 'world' } & { zero: 'cho' };
	const b: B = { hello: 'world', zero: 'cho' };
}
