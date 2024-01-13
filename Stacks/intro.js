// Stack -> LL -> ListNode
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
        this.addFirst = function (v) {
            var nn = new ListNode(v);
            if (_this.size == 0) {
                _this.head = nn;
                _this.tail = nn;
            }
            else {
                nn.next = _this.head;
                _this.head = nn;
            }
            _this.size++;
        };
        this.removeFirst = function () {
            if (_this.size == 0) {
                console.log("Stack underflow");
                return -1;
            }
            var val = _this.head.val;
            if (_this.size == 1) {
                _this.head = _this.tail = null;
            }
            else {
                _this.head = _this.head.next;
            }
            _this.size--;
            return val;
        };
        this.getSize = function () {
            return _this.size;
        };
        this.getFirst = function () {
            if (_this.size == 0) {
                console.log("Stack underflow");
                return -1;
            }
            return _this.head.val;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var MyPersonalStack = /** @class */ (function () {
    function MyPersonalStack() {
        var _this = this;
        this.push = function (val) {
            _this.ll.addFirst(val);
        };
        this.pop = function () {
            return _this.ll.removeFirst();
        };
        this.top = function () {
            return _this.ll.getFirst();
        };
        this.size = function () {
            return _this.ll.getSize();
        };
        this.ll = new LinkedList();
    }
    return MyPersonalStack;
}());
var stack = new MyPersonalStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.top()); // 40
stack.pop();
console.log(stack.pop()); //30
stack.pop();
stack.pop();
console.log(stack.top()); // stack underflow, -1
