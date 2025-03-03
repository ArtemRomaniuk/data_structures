class IntegerQueue {
    #items;

    constructor() {
        this.#items = [];
    }

    enqueue(number) {
        this.#items.push(number);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
        } else return this.#items.shift();
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
        } else return this.#items[0];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    clear() {
        this.#items = [];
    }

    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        console.log("Integer Queue:");
        this.#items.forEach((number, index) => {
            console.log(`${index + 1}. ${number}`);
        })
    }

    numOfElementslessThan10() {
        let count = 0;
        this.#items.forEach(num => {
            if (num < 10) count++;
        })
        return count;
    }
}

let nums = new IntegerQueue();
nums.displayQueue();
nums.dequeue();
nums.front();
console.log();

nums.enqueue(1);
nums.enqueue(3);
nums.enqueue(5);
nums.enqueue(7);
nums.enqueue(9);
nums.enqueue(11);
nums.enqueue(13);
nums.enqueue(15);
nums.displayQueue();
console.log(nums.isEmpty());
console.log();

console.log(nums.numOfElementslessThan10());
console.log(nums.front());
nums.dequeue();
console.log(nums.front());
nums.dequeue();
nums.displayQueue();
console.log(nums.numOfElementslessThan10());
console.log();

nums.clear();
nums.displayQueue();
console.log(nums.isEmpty());