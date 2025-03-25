class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(value) {
		let node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
	}

	removeByValue(value) {
		let current = this.head;
		if (!current) {
			console.log("Двозв'язний список пустий");
			return;
		}
		if (current.value === value) {
			this.head = this.head.next;
			this.head.prev = null;
			return;
		}
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next;
				return;
			} else {
				current = current.next;
			}
		}
		console.log("Немає елементу з значенням " + value);
	}

	clear() {
		this.head = null;
		this.tail = null;
	}

	isIncluding(value) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	testShow() {
		let current = this.head;
		console.log("Двозв'язний список:");
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

let dll = new DoubleLinkedList();
dll.removeByValue(5)
dll.add(5);
dll.add(25);
dll.add(35);
dll.testShow();
console.log(dll.isIncluding(5));
dll.removeByValue(5)
dll.removeByValue(-214)
dll.testShow();
console.log(dll.isIncluding(5));
dll.clear();
dll.testShow();