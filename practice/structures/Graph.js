let adjacencyList = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"],
}

class Graph {
    constructor(inputList = {}) {
        this.adjacencyList = {};
        for (let vertex in inputList) {
            this.adjacencyList[vertex] = [...inputList[vertex]];
        }
    }

    print() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " --> " + this.adjacencyList[vertex].join(", "));
        }
    }

    getLinks(v) {
        return this.adjacencyList[v] || [];
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
        if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];

        if (v1 === v2 && !this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v1);
        } else if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }

    removeVertex(v) {
        if (this.adjacencyList[v]) {
            delete this.adjacencyList[v];
            for (let vertex in this.adjacencyList) {
                if (this.adjacencyList[vertex].includes(v)) {
                    this.adjacencyList[vertex].splice(this.adjacencyList[vertex].indexOf(v), 1);
                }
            }
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2] && this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
            this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
        }
    }

    containsVertex(v) {
        if (this.adjacencyList[v]) return true;
        return false;
    }

    containsEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2] && this.adjacencyList[v1].includes(v2)) return true;
        return false;
    }
}

let graph = new Graph(adjacencyList);
graph.print()
console.log(graph.getLinks("B").join(", "));
console.log();



console.log("Second graph:");
let emptyGraph = new Graph();
emptyGraph.print();
emptyGraph.addEdge("A", "B");
emptyGraph.addVertex("C")
emptyGraph.addEdge("C", "A")
emptyGraph.addEdge("A", "C")
emptyGraph.addEdge("C", "A")
emptyGraph.removeVertex("C");
emptyGraph.removeEdge("B", "A")
emptyGraph.print();
console.log(emptyGraph.containsVertex("A"));
console.log(emptyGraph.containsEdge("B", "A"));