class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    add(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > queueElement.priority) {
                this.queue.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(queueElement);
        }
    }

    remove() {
        return this.queue.shift()?.element;
    }

    clear() {
        this.queue = [];
    }

    peek() {
        return this.queue[0]?.element;
    }

    printQueue() {
        console.log(this.queue.map(q => `(${q.element}, ${q.priority})`).join(' -> '));
    }
}

const pq = new PriorityQueue();
pq.add("A", 2);
pq.add("B", 1);
pq.add("C", 3);

pq.printQueue();
console.log(pq.remove());
console.log(pq.peek());
