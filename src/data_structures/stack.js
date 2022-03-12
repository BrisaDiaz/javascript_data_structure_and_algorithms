class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const temp = this.items[count];
    delete this.items[count];
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this.count = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) return "";
    let string = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      string = `${string},${this.items[i]}`;
    }
    return string;
  }
}

const myStack = new Stack();

myStack.push(2);

myStack.push(5);
myStack.push(3);
myStack.push(65);
myStack.push(70);
console.log(myStack.toString());
