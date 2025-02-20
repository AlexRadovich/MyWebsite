let nodeCount = 0;
let edgeCount = 0;
let nodelist = [];
let node_positions = [];
let node_position_found = 0;

class Graph {
    createNode(x,y){
        console.log("Node created");
        const created_node = new Node(nodeCount++,x,y);
        nodelist.push(created_node);
        console.log(created_node.name);
        const nodeElement = created_node.createElement();
        document.body.appendChild(nodeElement);
    }
    createEdge(x,y){
        console.log("Edge created");
        const created_edge = new Edge(edgeCount++,x,y);
        const edgeElement = created_edge.createElement();
        document.body.appendChild(edgeElement);
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
    constructor(name, x, y) {
        this.name = name || [];
        this.x = x;
        this.y = y;
    }
    createElement() {
        const edgeElement = document.createElement('div');
        edgeElement.classList.add('edge');
        edgeElement.style.left = `${this.x - 25}px`; // Center the node at the click position
        edgeElement.style.top = `${this.y - 25}px`;  // Center the node at the click position
        edgeElement.textContent = this.name;
        this.element = edgeElement;

        return this.element;
    
        }

}


function on_load() {
    console.log("Page has been loaded");

}
function yell(){
    console.log("HERE")
}
function clicked_on_node(x,y){
    node_position_found = 0;
    for(let i = 0;i < nodelist.length;i++){
        let x_pos = node_positions[i][0]
        let y_pos = node_positions[i][1]
        if((Math.abs(x-x_pos) <= 20) && (Math.abs(y-y_pos)<=20)){
            console.log("Colliding Node Positions:",x_pos,y_pos)
            node_position_found = 1;
        } 
    }
    return node_position_found;
}
document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if(clicked_on_node(x,y)){
        theGraph.createEdge(x,y)
    }
    else{
        theGraph.createNode(x, y);
        node_positions.push([x,y])
    }
    
});
document.addEventListener('DOMContentLoaded', on_load());


