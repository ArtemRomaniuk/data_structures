class Stack {
    constructor() {
        this.items = [];
    }
    // push - додає останній елемент
    // pop - видаляє останній
    // unshift - додає перший
    // shift - видаляє перший

    addToStack(element) {
        return this.items.push(element);
    }

    removeFromStack() {
        if (this.items.length === 0) {
            console.log("Цей стек пустий")
        }
        return this.items.pop();
    }

    checkStack() {
        return this.items[this.items.length - 1];
    }

    clearStack() {
        this.items = [];
    }

    searchInStack(element) {
        return this.items.includes(element);
    }

    testShow() {
        console.log('Стек: ' + this.items.toString());
    }
}

let stack = new Stack();
stack.addToStack(5);
stack.addToStack(15);
stack.testShow();
console.log(stack.searchInStack(15));