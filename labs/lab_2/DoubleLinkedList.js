class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            }
            if (!this.head) {
                this.tail = null;
            }
        } else if (index === this.size - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    getSize() {
        return this.size;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }

    getP1() {
        return this.head.data;
    }

    regroup() {
        let temp = [];
        let current = this.head.next;
        let prev = this.head;
        let j = 0;
        for (let i = 0; i < this.size - 1; i++) {
            if (i % 2 === 0) {
                temp[j++] = current.data;
                prev.next = current.next;
                current = current.next;
            } else {
                current = current.next;
                prev = prev.next;
            }
        }
        temp.forEach(el => {
            this.add(el);
            this.size--;
        })
    }
}

const list = new DoubleLinkedList();
let inputData = [10, 15, 18, 10, 7, -4, 20];
inputData.forEach(i => {
    list.add(i);
})
console.log("Список після додавання елементів: ", list.printList());
console.log("P1: " + list.getP1());
console.log("Розмір списку: ", list.getSize());
list.regroup();
console.log("Список після перегрупування непарних індексів: ", list.printList());
console.log("P1: " + list.getP1());
console.log("Розмір списку: ", list.getSize());