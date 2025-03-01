let nodeCount = 0;
let edgeCount = 0;
let nodelist = [];
let node_positions = [];
let currentNodeForEdge = null;

let LineGraphButton = 0;

class Graph {
    createNode(x, y) {
        console.log("Node created");
        const created_node = new Node(nodeCount++, x, y);
        nodelist.push(created_node);
        console.log(created_node.name);
        const nodeElement = created_node.createElement();
        document.body.appendChild(nodeElement);
    }

    createEdge(x, y, startNode) {
        console.log("Edge created");
        const created_edge = new Edge(edgeCount++, startNode.x, startNode.y, x, y);
        const edgeElement = created_edge.createElement();
        document.body.appendChild(edgeElement);
    }
}

const theGraph = new Graph();

class Node {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.element = null;
    }

    createElement() {
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
        nodeElement.style.left = `${this.x - 25}px`;
        nodeElement.style.top = `${this.y - 25}px`;
        nodeElement.textContent = this.name;
        nodeElement.addEventListener('click', () => onNodeClick(this));
        this.element = nodeElement;

        return this.element;
    }
}

class Edge {
    constructor(name, startX, startY, endX, endY) {
        this.name = name;
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.element = null;
    }

    createElement() {
        const edgeElement = document.createElement('div');
        edgeElement.classList.add('edge');
        edgeElement.style.position = 'absolute';
        edgeElement.style.left = `${this.startX}px`;
        edgeElement.style.top = `${this.startY}px`;
        edgeElement.style.width = `${Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2))}px`;
        edgeElement.style.transformOrigin = '0 0';
        edgeElement.style.transform = `rotate(${Math.atan2(this.endY - this.startY, this.endX - this.startX) * 180 / Math.PI}deg)`;
        edgeElement.textContent = this.name;
        this.element = edgeElement;

        return this.element;
    }

    updatePosition(endX, endY) {
        this.endX = endX;
        this.endY = endY;
        this.element.style.width = `${Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2))}px`;
        this.element.style.transform = `rotate(${Math.atan2(this.endY - this.startY, this.endX - this.startX) * 180 / Math.PI}deg)`;
    }
}

let edgeInProgress = null;

function onNodeClick(node) {
    if (edgeInProgress) {

        edgeInProgress.updatePosition(node.x, node.y);
        edgeInProgress = null;

    } else {
        currentNodeForEdge = node;
        edgeInProgress = new Edge(edgeCount++, node.x, node.y, node.x, node.y);
        const edgeElement = edgeInProgress.createElement();
        document.body.appendChild(edgeElement);
    }
}

document.body.addEventListener('mousemove', (event) => {
    if (edgeInProgress) {
        edgeInProgress.updatePosition(event.clientX, event.clientY);
    }
});


const button = document.getElementById("button")
button.addEventListener('click', function(event) {
    event.stopPropagation();
    if(LineGraphButton){
        button.textContent = "yeah"
        button.classList = "sidebar-button button-off"
        LineGraphButton = 0
    }
    else{
        button.textContent = "Line Graph"
        button.classList = "sidebar-button button-on"
        LineGraphButton = 1
    }
});


document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (!clicked_on_node(x, y)) {
        theGraph.createNode(x, y);
        node_positions.push([x, y]);
    }
});

function clicked_on_node(x, y) {
    let node_position_found = 0;
    for (let i = 0; i < nodelist.length; i++) {
        let x_pos = nodelist[i].x;
        let y_pos = nodelist[i].y;
        if (Math.abs(x - x_pos) <= 20 && Math.abs(y - y_pos) <= 20) {
            console.log("Colliding Node Positions:", x_pos, y_pos);
            node_position_found = 1;
            break;
        }
    }
    return node_position_found;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page has been loaded");
});
