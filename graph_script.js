let nodeCount = 0;
let nodelist = []

class Graph {
    createNode(x,y){
        console.log("Node created");
        const created_node = new Node(nodeCount++,x,y);
        nodelist.push(created_node);
        console.log(created_node.name);
        const nodeElement = created_node.createElement();
        document.body.appendChild(nodeElement);
    }

}
const theGraph = new Graph()


class Node {
    constructor(name,x,y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.element = null;
    }
    createElement() {
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
        nodeElement.style.left = `${this.x - 25}px`; // Center the node at the click position
        nodeElement.style.top = `${this.y - 25}px`;  // Center the node at the click position
        nodeElement.textContent = this.name;
        this.element = nodeElement;

        return this.element;
    
        }
}

class Edge {
    constructor(node1, node2, name) {
        this.name = name || [];
        this.node1 = node1;
        this.node2 = node2;
    }

}


function on_load() {
    console.log("Page has been loaded");

}
function yell(){
    console.log("HERE")
}

document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Use the NodeManager to create and add a new node
    theGraph.createNode(x, y);
});
document.addEventListener('DOMContentLoaded', on_load());


