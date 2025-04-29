class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    #root = null;

    #recursiveAdd(value, node) {
        if (node === null) return new Node(value);
        if (value < node.value) {
            node.leftChild = this.#recursiveAdd(value, node.leftChild);
        } else if (value > node.value) {
            node.rightChild = this.#recursiveAdd(value, node.rightChild);
        }
        return node;
    }

    add(value) {
        this.#root = this.#recursiveAdd(value, this.#root);
    }

    #recursivePrintInOrder(node) {
        if (node === null) return;
        this.#recursivePrintInOrder(node.leftChild);
        console.log(node.value);
        this.#recursivePrintInOrder(node.rightChild);
    }

    printInOrder() {
        this.#recursivePrintInOrder(this.#root);
    }

    #recursiveContains(value, node) {
        if (node === null) return false;
        if (value === node.value) return true;
        else if (value < node.value) return this.#recursiveContains(value, node.leftChild);
        else if (value > node.value) return this.#recursiveContains(value, node.rightChild);
    }

    contains(value) {
        return this.#recursiveContains(value, this.#root);
    }

    #recursiveRemove(value, node) {
        if (node === null) return null;
        if (value < node.value) node.leftChild = this.#recursiveRemove(value, node.leftChild);
        else if (value > node.value) node.rightChild = this.#recursiveRemove(value, node.rightChild);
        else {
            if (node.leftChild === null && node.rightChild === null) {
                return null;
            } else if (node.leftChild !== null && node.rightChild !== null) {
                let swapNode = node.rightChild;
                let parent = node;
                while (swapNode.leftChild) {
                    parent = swapNode;
                    swapNode = swapNode.leftChild;
                }
                if (parent === node) {
                    parent.rightChild = swapNode.rightChild;
                } else {
                    parent.leftChild = swapNode.rightChild;
                }
                node.value = swapNode.value;
                return node;
            } else {
                if (node.leftChild !== null) {
                    return node.leftChild;
                } else {
                    return node.rightChild;
                }
            }
        }
        return node;
    }

    remove(value) {
        this.#root = this.#recursiveRemove(value, this.#root);
    }

    #recursivePrintTreeLike(node, indent = 0, spaces = 4) {
        if (node === null) return;
        indent += spaces;
        this.#recursivePrintTreeLike(node.rightChild, indent);
        console.log(" ".repeat(indent - spaces) + node.value);
        this.#recursivePrintTreeLike(node.leftChild, indent);
    }

    printTreeLike() {
        this.#recursivePrintTreeLike(this.#root);
    }

    #isSameDigits(number) {
        if (Math.abs(number) < 11) return false;
        let stringNumber = Math.abs(number).toString();
        for (let i = 1; i < stringNumber.length; i++) {
            if (stringNumber[i] !== stringNumber[0]) return false;
        }
        return true;
    }

    #recursiveTask1(node) {
        if (node === null) return;
        this.#recursiveTask1(node.leftChild);
        if (this.#isSameDigits(node.value)) {
            node.value = 0;
        }
        this.#recursiveTask1(node.rightChild);
    }

    task1() {
        this.#recursiveTask1(this.#root);
    }

    #subTreeSums(node) {
        if (node === null) return 0;

        let sumLeft = 0;
        let sumRight = 0;
        sumLeft += this.#subTreeSums(node.leftChild);
        sumRight += this.#subTreeSums(node.rightChild);

        console.log(`Нода ${node.value} - сума лівого піддерева ${sumLeft} - сума правого піддерева ${sumRight}`);
        if (Math.abs(sumRight - sumLeft) > 20) console.log(`У ноди ${node.value} різниця сум елементів у правому і лівому піддереві більша 20`);

        return node.value + sumLeft + sumRight;
    }

    task2() {
        this.#subTreeSums(this.#root);
    }
}

let bst = new BinarySearchTree();
bst.add(11);
bst.add(7);
bst.add(15);
bst.add(5);
bst.add(33);
bst.add(13);
bst.printInOrder()
console.log();
bst.printTreeLike();
console.log();

bst.task1();
bst.printTreeLike();
console.log();

// bst.task2();