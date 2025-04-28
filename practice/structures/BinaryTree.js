class TreeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

let binaryTreeRoot = new TreeNode(10);
binaryTreeRoot.leftChild = new TreeNode(6);
binaryTreeRoot.rightChild = new TreeNode(12);
binaryTreeRoot.leftChild.rightChild = new TreeNode(7);

function printInOrder(node) {
    if (node === null) return;
    printInOrder(node.leftChild)
    console.log(node.value);
    printInOrder(node.rightChild)
}

printInOrder(binaryTreeRoot);