// interface IWithLength {
// 	length: number;
// }

// function echoWithLength<T extends IWithLength>(arg: T): T {
// 	console.log(arg.length);
// 	return arg;
// }

// const str = echoWithLength('str');
// const obj = echoWithLength({ length: 10, width: 90 });
// const arr2 = echoWithLength([1, 3, 5]);
// echoWithLength(12);

class Queue<T> {
	private data = [];
	push(item: T) {
		return this.data.push(item);
	}
	pop(): T {
		return this.data.shift();
	}
}

const queue = new Queue<number>();

queue.push(1);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push('str');
console.log(queue2.pop().length);

interface KeyPair<T, U> {
	key: T;
	value: U;
}

let kp1: KeyPair<number, string> = { key: 333, value: 'tttt' };
let kp2: KeyPair<string, number> = { key: 'hhhh', value: 444 };

interface IPlus<T> {
	(a: T, b: T): T;
}

function plus(a: number, b: number): number {
	return a + b;
}

function connect(a: string, b: string): string {
	return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
