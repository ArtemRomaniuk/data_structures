class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Додавання елемента в чергу з пріоритетом
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

    // Видалення та повернення елемента з найвищим пріоритетом
    remove() {
        return this.queue.shift()?.element;
    }

    clear() {
        this.queue = [];
    }

    // Отримання елемента з найвищим пріоритетом без видалення
    peek() {
        return this.queue[0]?.element;
    }

    // Виведення черги у вигляді рядка
    printQueue() {
        return this.queue.map(q => `(${q.element}, ${q.priority})`).join(' -> ');
    }
}

// Приклад використання
const pq = new PriorityQueue();
pq.add("A", 2);
pq.add("B", 1);
pq.add("C", 3);

console.log(pq.printQueue()); // (B, 1) -> (A, 2) -> (C, 3)
console.log(pq.remove()); // B
console.log(pq.peek()); // A
