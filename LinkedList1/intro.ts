class ListNode {
    val: number;
    next: ListNode | null;

    constructor(v: number) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize = () => {
        return this.size;
    };

    addLast = (val: number) => {
        let newNode = new ListNode(val);
        if (this.tail == null) {
            //if linkedlist is empty, both head and tail will point to newNode
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    };

    print = () => {
        let temp: ListNode | null = this.head;
        let s: string = "";

        while (temp != null) {
            s += temp.val + " -> "; // print that node
            temp = temp.next; // move temp to its next node
        }
        s += "null";
        console.log(s);
    };

    addFirst = (val: number) => {
        let newNode = new ListNode(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    };

    removeFirst = (): number => {
        if (this.head == null) {
            console.log("LinkedList is already empty!");
            return -1;
        }
        let retVal = this.head.val;
        this.head = this.head.next;
        if (this.size == 1) this.tail = this.tail.next;
        this.size--;
        return retVal;
    };

    removeLast = (): number => {
        if (this.head == null) {
            console.log("LinkedList is already empty!");
            return -1;
        }
        let retVal = this.tail?.val;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next != this.tail) {
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
        }
        this.size--;
        return retVal;
    };

    private getNodeAt = (idx: number): ListNode | null => {
        if (idx < 0 || idx >= this.size) return null;
        let temp: any = this.head;
        let currIdx = 0;
        while (currIdx != idx) {
            temp = temp?.next;
            currIdx++;
        }
        return temp;
    };

    getAt = (idx: number): number => {
        if (idx < 0 || idx >= this.size) return -1;
        let node = this.getNodeAt(idx);
        return node.val;
    };

    removeAt = (idx: number): number => {
        if (idx < 0 || idx >= this.size) {
            console.log("Invalid index!");
            return -1;
        } else if (idx == 0) {
            return this.removeFirst();
        } else if (idx == this.size - 1) {
            return this.removeLast();
        }
        let prevNode: any = this.getNodeAt(idx - 1);
        let retVal = prevNode?.next?.val;
        prevNode.next = prevNode?.next?.next;
        this.size--;
        return retVal;
    };

    addAt = (idx: number, value: number): void => {
        if (idx < 0 || idx >= this.size) {
            console.log("Invalid Index!");
            return;
        } else if (idx == 0) {
            this.addFirst(value);
            return;
        } else if (idx == this.size - 1) {
            this.addLast(value);
            return;
        }
        let newNode = new ListNode(value);
        let prevNode: any = this.getNodeAt(idx - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;

        this.size++;
    };
}

let ll = new LinkedList();
ll.addLast(10); //10
ll.addLast(20); //10 20
ll.addLast(30); // 10 20 30
ll.addFirst(40); //40 10 20 30
ll.removeFirst(); //10 20 30
ll.addFirst(100); //100 10 20 30
ll.addAt(1,200)
ll.print(); //100 200 10 20 30

// class  Human{
//     weight: number;
//     name : string;
//     constructor(name:string,weight:number) {
//         this.name  = name;
//         this.weight= weight;
//     }
//     excercise= ()=>{
//         this.weight--;
//     }
// }

// let human1 = new Human("Sameer",60);
// human1.excercise();
// console.log(human1.weight);
