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
echoWithLength(12);
