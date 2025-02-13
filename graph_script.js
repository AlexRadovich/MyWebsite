class Graph {
    constructor(nodes = []) {
        this.nodes = nodes
    }
    createNode(){
        console.log("Node created1");

        const created_node = new Node()
        this.nodes.push(created_node)
        console.log(nodeCount);
        
    }

}

class Node {
    constructor(name,edges) {
        this.name = name;
        this.edges = edges || [];
    }

    
}

class Edge {
    constructor(node1, node2, name) {
        this.name = name || [];
        this.node1 = node1;
        this.node2 = node2;
    }

}

let nodeCount = 0;
const theGraph = new Graph()

function on_load() {
    console.log("Page has been loaded");

}
function yell(){
    console.log("HERE")
}

document.addEventListener('click',theGraph.createNode);

document.addEventListener('DOMContentLoaded', on_load());


