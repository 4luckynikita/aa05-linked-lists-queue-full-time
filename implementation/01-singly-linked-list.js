// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        if (this.head === null) {
            this.length++;
            this.head = new SinglyLinkedNode(val);
            return this;
        }

        let newHead = new SinglyLinkedNode(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;


        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        return oldHead;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return;
        if(!this.head.next) {
            this.length--;
            let oldHead = this.head;
            this.head = null;
            return oldHead;
        }

        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }
        let oldTail = curr.next;
        curr.next = null;
        this.length--;
        return oldTail;


        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
