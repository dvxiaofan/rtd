class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	run() {
		return `${this.name} is running`;
	}
}

const snake = new Animal('lily');

class Dog extends Animal {
	bark() {
		return `${this.name} is barking`;
	}
}

const xiaoBao = new Dog('xiaobao');

// console.log(xiaoBao.run());
// console.log(xiaoBao.bark());

class Meow extends Animal {
	constructor(name) {
		super(name);
		console.log(this.name);
	}
	run() {
		return `Meow, ${super.run()}`;
	}
}

const mao = new Meow('mao');
console.log(mao.run());
