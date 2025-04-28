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

    #recursivePrintPreOrder(node) {
        if (node === null) return;
        console.log(node.value);
        this.#recursivePrintPreOrder(node.leftChild);
        this.#recursivePrintPreOrder(node.rightChild);
    }

    printPreOrder() {
        this.#recursivePrintPreOrder(this.#root);
    }

    #recursivePrintPostOrder(node) {
        if (node === null) return;
        this.#recursivePrintPostOrder(node.leftChild);
        this.#recursivePrintPostOrder(node.rightChild);
        console.log(node.value);
    }

    printPostOrder() {
        this.#recursivePrintPostOrder(this.#root);
    }

    printHierarchy() {
        console.log(this.#root);
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
}

let bst = new BinarySearchTree();
bst.add(10);
bst.add(7);
bst.add(12);
bst.add(5);
bst.printPreOrder()
console.log();
bst.printInOrder()
console.log();
bst.printPostOrder()
console.log();
bst.printTreeLike();