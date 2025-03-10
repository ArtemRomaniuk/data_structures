class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
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

    isEmpty() {
        return this.size === 0 ? true : false;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }

    deleteMultipleOf3() {
        if (this.head.data % 3 === 0) {
            this.head = this.head.next;
            this.size--;
        }
        let current = this.head.next;
        let prev = this.head;
        while (current) {
            if (current.data % 3 === 0) {
                prev.next = current.next;
                this.size--;
                current = current.next;
            } else {
                current = current.next;
                prev = prev.next;
            }
        }
    }

    add88AfterEqualPair() {
        let current = this.head.next;
        let prev = this.head;
        while (current) {
            if (prev.data === current.data) {
                if (current.next) {
                    let temp = current.next;
                    current.next = new Node(88);
                    current.next.next = temp;
                    this.size++;
                } else {
                    current.next = new Node(88);
                    this.size++;
                }
            }
            current = current.next;
            prev = prev.next;
        }
    }
}

const list = new SingleLinkedList();
let inputData = [10, 10, 15, 18, 10, 7, -4, 20, 20];
inputData.forEach(i => {
    list.add(i);
})
console.log("Початковий список елементів: ", list.printList());
console.log(list.size);
list.deleteMultipleOf3();
console.log("Після видалення кратних 3: ", list.printList());
console.log(list.size);
list.add88AfterEqualPair();
console.log("Після додавання 88: ", list.printList());
console.log(list.size);