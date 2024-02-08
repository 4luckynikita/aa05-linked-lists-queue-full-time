const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }
        else{
            
            this.tail = newNode;
            if(this.length === 1) this.head.next = newNode;
            this.length++;
            return this.length;
        }
        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(this.length === 0) return null;
        // Your code here 
        if(this.length === 1){
            let oldVal = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return oldVal;
        }
        
        let oldVal = this.head.value;
        this.head = this.head.next;
        console.log(this.head);
        this.length--;
        return oldVal;

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
