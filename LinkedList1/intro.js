var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.getSize = function () {
            return _this.size;
        };
        this.addLast = function (val) {
            var newNode = new ListNode(val);
            if (_this.tail == null) {
                //if linkedlist is empty, both head and tail will point to newNode
                _this.head = newNode;
                _this.tail = newNode;
            }
            else {
                _this.tail.next = newNode;
                _this.tail = newNode;
            }
            _this.size++;
        };
        this.print = function () {
            var temp = _this.head;
            var s = "";
            while (temp != null) {
                s += temp.val + " -> "; // print that node
                temp = temp.next; // move temp to its next node
            }
            s += "null";
            console.log(s);
        };
        this.addFirst = function (val) {
            var newNode = new ListNode(val);
            if (_this.head == null) {
                _this.head = newNode;
                _this.tail = newNode;
            }
            else {
                newNode.next = _this.head;
                _this.head = newNode;
            }
            _this.size++;
        };
        this.removeFirst = function () {
            if (_this.head == null) {
                console.log("LinkedList is already empty!");
                return -1;
            }
            var retVal = _this.head.val;
            _this.head = _this.head.next;
            if (_this.size == 1)
                _this.tail = _this.tail.next;
            _this.size--;
            return retVal;
        };
        this.removeLast = function () {
            var _a;
            if (_this.head == null) {
                console.log("LinkedList is already empty!");
                return -1;
            }
            var retVal = (_a = _this.tail) === null || _a === void 0 ? void 0 : _a.val;
            if (_this.size == 1) {
                _this.head = null;
                _this.tail = null;
            }
            else {
                var temp = _this.head;
                while (temp.next != _this.tail) {
                    temp = temp.next;
                }
                temp.next = null;
                _this.tail = temp;
            }
            _this.size--;
            return retVal;
        };
        this.getNodeAt = function (idx) {
            if (idx < 0 || idx >= _this.size)
                return null;
            var temp = _this.head;
            var currIdx = 0;
            while (currIdx != idx) {
                temp = temp === null || temp === void 0 ? void 0 : temp.next;
                currIdx++;
            }
            return temp;
        };
        this.getAt = function (idx) {
            if (idx < 0 || idx >= _this.size)
                return -1;
            var node = _this.getNodeAt(idx);
            return node.val;
        };
        this.removeAt = function (idx) {
            var _a, _b;
            if (idx < 0 || idx >= _this.size) {
                console.log("Invalid index!");
                return -1;
            }
            else if (idx == 0) {
                return _this.removeFirst();
            }
            else if (idx == _this.size - 1) {
                return _this.removeLast();
            }
            var prevNode = _this.getNodeAt(idx - 1);
            var retVal = (_a = prevNode === null || prevNode === void 0 ? void 0 : prevNode.next) === null || _a === void 0 ? void 0 : _a.val;
            prevNode.next = (_b = prevNode === null || prevNode === void 0 ? void 0 : prevNode.next) === null || _b === void 0 ? void 0 : _b.next;
            _this.size--;
            return retVal;
        };
        this.addAt = function (idx, value) {
            if (idx < 0 || idx >= _this.size) {
                console.log("Invalid Index!");
                return;
            }
            else if (idx == 0) {
                _this.addFirst(value);
                return;
            }
            else if (idx == _this.size - 1) {
                _this.addLast(value);
                return;
            }
            var newNode = new ListNode(value);
            var prevNode = _this.getNodeAt(idx - 1);
            var nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            _this.size++;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(10); //10
ll.addLast(20); //10 20
ll.addLast(30); // 10 20 30
ll.addFirst(40); //40 10 20 30
ll.removeFirst(); //10 20 30
ll.addFirst(100); //100 10 20 30
ll.addAt(1, 200);
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
