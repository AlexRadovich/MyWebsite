let nodeCount = 0;
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
        console.log("Node created");

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
function clicked_on_node(x,y){
    node_position_found = 0;
    for(let i = 0;i<nodelist.length-1;i++){
        let x_pos = node_positions[i][0]
        let y_pos = node_positions[i][1]
        if((Math.abs(x-x_pos) <= 20) && (Math.abs(y-y_pos)<=20)){
            console.log("POSITIONS:",x_pos,y_pos)
            node_position_found = 1;
        } 
    }
    return node_position_found;
}
document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    theGraph.createNode(x, y);
    node_positions.push([x,y])

    if(clicked_on_node(x,y)){
        yell()
    }

    console.log(node_positions[0]);
    console.log(node_positions[1]);
    console.log(node_positions[2]);
    
    
});
document.addEventListener('DOMContentLoaded', on_load());


