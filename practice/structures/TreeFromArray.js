let array = [3, 421, 2, 53, -14, 0, 42, 21, 1, 97];

class TreeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

function recursionTreeFromArray(value, node) {
    if (node === null) return new TreeNode(value);
    if (value < node.value) {
        node.leftChild = recursionTreeFromArray(value, node.leftChild);
    } else if (value > node.value) {
        node.rightChild = recursionTreeFromArray(value, node.rightChild);
    }
    return node;
}

function treeFromArray(array) {
    let root = null;

    for (let i = 0; i < array.length; i++) {
        root = recursionTreeFromArray(array[i], root);
    }

    return root;
}

function printTreeLike(node, indent = 0, spaces = 4) {
    if (node === null) return;
    indent += spaces;
    printTreeLike(node.rightChild, indent);
    console.log(" ".repeat(indent - spaces) + node.value);
    printTreeLike(node.leftChild, indent);
}

function printInOrder(node) {
    if (node === null) return;
    printInOrder(node.leftChild);
    console.log(node.value);
    printInOrder(node.rightChild);
}

///////////////////////////////////////////////////////////////////////////

let treeRoot = treeFromArray(array);

printTreeLike(treeRoot);
console.log();
console.log();
console.log();
console.log(treeRoot.rightChild.leftChild.value);
console.log(treeRoot.leftChild.value);
console.log();
printInOrder(treeRoot);