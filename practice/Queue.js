class Queue {
    constructor() {
        this.items = [];
    }

    addToQueue(el) {
        this.items.push(el);
    }

    removeFromQueue() {
        if (this.items.length === 0) {
            console.log("Черга пуста!");
        }
        return this.items.shift();
    }

    firstOut() {
        if (this.items.length === 0) {
            console.log("Черга пуста!");
        }
        return this.items[0];
    }

    clear() {
        this.items = [];
    }

    testShow() {
        console.log("Черга: " + this.items.toString());
    }
}

let queue = new Queue();
queue.addToQueue(10);
queue.addToQueue(20);
queue.addToQueue(30);
queue.addToQueue(40);
queue.testShow();
console.log(queue.removeFromQueue());
queue.removeFromQueue();
queue.testShow();
console.log(queue.firstOut());
queue.testShow();
queue.clear();
queue.testShow();