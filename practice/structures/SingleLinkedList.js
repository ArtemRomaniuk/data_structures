class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SingleLinkedList {
	#size;

	constructor() {
		this.head = null;
		this.#size = 0;
	}

	add(value) {
		let node = new Node(value);
		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.#size++;
	}

	removeByValue(value) {
		let current = this.head;
		if (!current) {
			console.log("Зв'язний список пустий");
			return;
		}
		if (current.value === value) {
			this.head = this.head.next;
			this.#size--;
			return;
		}
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next;
				this.#size--;
				return;
			} else {
				current = current.next
			}
		}
		console.log("Немає елементу з значенням " + value);
	}

	removeByIndex(index) {
		let current = this.head;
		if (!current) {
			console.log("Зв'язний список пустий");
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
			this.#size--;
			return;
		}
		for (let i = 0; i < this.#size - 1; i++) {
			if (i + 1 === index) {
				current.next = current.next.next;
				this.#size--;
				return;
			} else {
				current = current.next;
			}
		}
		console.log("Немає елементу з індексом " + index);
	}

	clear() {
		this.head = null;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	peek(index) {
		let current = this.head;
		for (let i = 0; i < this.#size; i++) {
			if (i === index) {
				return current.value;
			} else {
				current = current.next;
			}
		}
		return undefined;
	}

	indexOf(value) {
		let current = this.head;
		for (let i = 0; i < this.#size; i++) {
			if (current.value === value) {
				return i;
			} else {
				current = current.next;
			}
		}
		return -1;
	}

	testShow() {
		let current = this.head;
		console.log("Зв'язний список:");
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

let sll = new SingleLinkedList();
sll.removeByIndex(5)
sll.removeByValue(5)
console.log("Розмір списку: " + sll.size);
sll.size = 5;
console.log("Розмір списку: " + sll.size);
sll.add(5);
sll.add(15);
sll.add(25);
sll.add(35);
sll.add(45);
sll.testShow();
console.log("Розмір списку: " + sll.size);
sll.removeByValue(25);
sll.removeByValue(214);
sll.testShow();
console.log("Елемент з індексом 2: " + sll.peek(2));
console.log("Індекс елементу з значенням 45: " + sll.indexOf(45));
sll.removeByIndex(2);
sll.removeByIndex(-1);
sll.testShow();
console.log("Розмір списку: " + sll.size);
sll.clear();
sll.testShow();
console.log("Розмір списку: " + sll.size);