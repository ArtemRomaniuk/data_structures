class Queue {
    constructor() {
        this.items = [];
    }

    add(el) {
        this.items.push(el);
    }

    remove() {
        if (this.items.length === 0) {
            console.log("Черга пуста!");
        }
        return this.items.shift();
    }

    clear() {
        this.items = [];
    }

    peekFirst() {
        if (this.items.length === 0) {
            console.log("Черга пуста!");
        }
        return this.items[0];
    }

    peek(index) {
        return this.items[index];
    }

    indexOf(el) {
        return this.items.indexOf(el);
    }

    testShow() {
        console.log("Черга: " + this.items.toString());
    }
}

let queue = new Queue();
queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);
queue.testShow();
console.log(queue.remove());
queue.remove();
queue.testShow();
console.log(queue.peekFirst());
console.log(queue.peek(1));
queue.add(12);
queue.testShow();
queue.clear();
queue.testShow();