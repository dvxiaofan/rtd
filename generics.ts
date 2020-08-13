interface IWithLength {
	length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
	console.log(arg.length);
	return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 10, width: 90 });
const arr2 = echoWithLength([1, 3, 5]);
// echoWithLength(12);

class Queue {
	private data = [];
	push(item) {
		return this.data.push(item);
	}
	pop() {
		return this.data.shift();
	}
}

const queue = new Queue();

queue.push(1);
queue.push('str');
console.log(queue);
