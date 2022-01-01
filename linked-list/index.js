// Data Structure

// 1 => Array
// 2 => Object
// 3 => Set
// 4 => Map
// 5 => WeakMap
// 6 => WeakSet

// Linked List
// [value, next] => [value, next] => [value, next]

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.last = null;
    }

    append(data) {
        const node = new Node(data);
        if (this.last) {
            this.last.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.last = node;
    }

    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        if (!this.last) {
            this.last = node;
        }
    }

    find(data) {
        if (!this.head) return null;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next
        }
    }

    insertAfter(after, data,) {
        const found = this.find(after);
        if (!found) {
            return null;
        }
        found.next = new Node(data, found.next);
    }

    remove(data){
        if(!this.head){
            return
        }

        while(this.head && this.head.data === data){
            this.head = this.head.next;
        }

        let current = this.head;

        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
            }else {
                current = current.next;
            }

        }

        if(this.last.data === data){
            this.last = current;
        }

    }

    toArray() {
        let current = this.head;
        let _output = [];

        while (current) {
            _output.push(current);
            current = current.next;
        }
        return _output;
    }

}

const list = new LinkedList();

console.log('list: ', list)