import { any } from 'prop-types';

type NameResolver = () => string;
type nameOrResolver = string | NameResolver;

function getName(n: nameOrResolver): string {
	if (typeof n === 'string') {
		return n;
	}
	return n();
}

/* type assertion 类型断言 */

function getLength(input: string | number): number {
	// const str = input as String
	// if (str.length) return str.length
	// const number = input as Number
	// return number.toString().length

	if ((<string>input).length) {
		return (<string>input).length;
		return input.toString().length;
	}
}
