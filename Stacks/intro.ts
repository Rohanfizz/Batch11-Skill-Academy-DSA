// Stack -> LL -> ListNode
class ListNode{
    val:number;
    next: ListNode | null;
    constructor(v:number){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst = (v:number) => {
        let nn = new ListNode(v);
        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    }

    removeFirst = () : number =>{
        if(this.size == 0){
            console.log("Stack underflow");
            return -1;
        }
        let val = this.head.val;
        if(this.size == 1){
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
        }
        this.size--;
        return val;
    }

    getSize = ():number =>{
        return this.size;
    }

    getFirst = ():number =>{
        if(this.size == 0){
            console.log("Stack underflow");
            return -1;
        }
        return this.head.val;
    }
}

class MyPersonalStack{
    private ll : LinkedList;

    constructor(){
        this.ll = new LinkedList();
    }

    push= (val:number)=>{
        this.ll.addFirst(val);
    }
    pop= ():number=>{
        return this.ll.removeFirst();
    }
    top= ():number=>{
        return this.ll.getFirst();
    }
    size= ():number=>{
        return this.ll.getSize();
    }
}

let stack = new MyPersonalStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.top());   // 40
stack.pop();
console.log(stack.pop());   //30
stack.pop();
stack.pop();
console.log(stack.top());// stack underflow, -1



