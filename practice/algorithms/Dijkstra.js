// let testVertex = {
//     B: 12,
//     C: 3,
//     D: 6,
// }

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    print() {
        if (Object.keys(this.adjacencyList).length <= 0) {
            console.log("Граф пустий");
            return;
        }
        for (let outerVertex in this.adjacencyList) {
            console.log(outerVertex + " --> " + Object.entries(this.adjacencyList[outerVertex]).map(([v, weight]) => `${v} = ${weight}`).join(", ") + "\n");
        }
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = {};
        }
    }

    addEdge(v1, v2, weight) {
        if (!this.adjacencyList[v1]) this.adjacencyList[v1] = {};
        if (!this.adjacencyList[v2]) this.adjacencyList[v2] = {};

        if (v1 === v2 && !this.adjacencyList[v1][v2]) {
            this.adjacencyList[v1][v2] = weight;
        } else if (!this.adjacencyList[v1][v2]) {
            this.adjacencyList[v1][v2] = weight;
            this.adjacencyList[v2][v1] = weight;
        }
    }

    removeVertex(v) {
        if (this.adjacencyList[v]) {
            delete this.adjacencyList[v];
            for (let vertex in this.adjacencyList) {
                if (this.adjacencyList[vertex][v]) {
                    delete this.adjacencyList[vertex][v];
                }
            }
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2] && this.adjacencyList[v1][v2]) {
            delete this.adjacencyList[v1][v2];
            delete this.adjacencyList[v2][v1];
        }
    }

    containsVertex(v) {
        if (this.adjacencyList[v]) return true;
        return false;
    }

    containsEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2] && this.adjacencyList[v1][v2]) return true;
        return false;
    }

    DijkstraAlgorithm(v) {
        let distances = {};
        let previous = {};
        let nodes = [];

        for (let vertex in this.adjacencyList) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
            nodes.push(vertex);
        }
        distances[v] = 0;

        while (nodes.length > 0) {
            nodes.sort((a, b) => distances[a] - distances[b]);
            let closest = nodes.shift();

            if (distances[closest] === Infinity) break;

            for (let neighbour in this.adjacencyList[closest]) {
                let newDistance = distances[closest] + this.adjacencyList[closest][neighbour];

                if (newDistance < distances[neighbour]) {
                    distances[neighbour] = newDistance;
                    if (!previous[neighbour]) previous[neighbour] = [];
                    previous[neighbour].push(closest);
                }
            }
        }

        return { distances, previous };
    }

    DijkstraRoute(v1, v2) {
        let distances = {};
        let previous = {};
        let nodes = [];

        for (let vertex in this.adjacencyList) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
            nodes.push(vertex);
        }
        distances[v1] = 0;

        while (nodes.length > 0) {
            nodes.sort((a, b) => distances[a] - distances[b]);
            let closest = nodes.shift();

            if (distances[closest] === Infinity) break;

            for (let neighbour in this.adjacencyList[closest]) {
                let newDistance = distances[closest] + this.adjacencyList[closest][neighbour];

                if (newDistance < distances[neighbour]) {
                    distances[neighbour] = newDistance;
                    if (!previous[neighbour]) previous[neighbour] = [];
                    previous[neighbour].push(closest);
                }
            }
        }

        return { distance: distances[v2], route: previous[v2] };
    }
}



let graph = new Graph();
graph.addEdge("V_1", "V_2", 7);
graph.addEdge("V_1", "V_4", 1);
graph.addEdge("V_1", "V_3", 3);
graph.addEdge("V_2", "V_4", 2);
graph.addEdge("V_2", "V_6", 8);
graph.addEdge("V_3", "V_4", 7);
graph.addEdge("V_3", "V_5", 11);
graph.addEdge("V_5", "V_4", 5);
graph.addEdge("V_5", "V_6", 6);
graph.addEdge("V_6", "V_4", 4);
graph.print();

let resultV_1 = graph.DijkstraAlgorithm("V_1");
console.log(resultV_1.distances);
console.log(resultV_1.previous);

let resultV1_V2 = graph.DijkstraRoute("V_1", "V_2");
console.log("\n" + resultV1_V2.distance);
console.log(resultV1_V2.route);