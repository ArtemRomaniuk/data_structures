class Stack {
    constructor() {
        this.items = [];
    }
    // push - додає останній елемент
    // pop - видаляє останній
    // unshift - додає перший
    // shift - видаляє перший

    add(element) {
        this.items.push(element);
    }

    remove() {
        if (this.items.length === 0) {
            console.log("Цей стек пустий")
        } else {
            return this.items.pop();
        }
    }

    clear() {
        this.items = [];
    }

    peekLast() {
        return this.items[this.items.length - 1];
    }

    peek(index) {
        return this.items[index];
    }

    indexOf(element) {
        let tempArr = [];
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i] !== element) {
                tempArr.push(this.items[i]);
                this.remove();
            } else {
                for (let j = tempArr.length; j >= 0; j--) {
                    if (tempArr[j] !== undefined) this.add(tempArr[j]);
                }
                return i;
            }
        }
        for (let j = tempArr.length; j >= 0; j--) {
            if (tempArr[j] !== undefined) this.add(tempArr[j]);
        }
        return -1;
    }

    testShow() {
        console.log('Стек: ' + this.items.toString());
    }
}

let stack = new Stack();
stack.add(5);
stack.add(15);
stack.add(25)
stack.add(35)
stack.add(45)
stack.testShow();
console.log('Індекс 25: ' + stack.indexOf(25));
stack.testShow();
console.log(stack.peekLast());
console.log(stack.peek(1));
stack.remove()
stack.testShow()
stack.clear();
stack.testShow()
