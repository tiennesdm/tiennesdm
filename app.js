function Queue() {
    this.front = 0;
    this.rear = 0;
    this.items = [];
}
Queue.prototype.enqueue = function(element) {
    this.items[this.rear] = element;
    this.rear++;
}
Queue.prototype.dequeue = function() {
    this.front++;
    //  console.log(this.front);
}
Queue.prototype.front = function() {
    return this.items[0];
}
Queue.prototype.peek = function() {
    arr = new Array();
    while (this.front < this.rear) {
        arr.push(this.items[this.front]);
        this.front++;
    }
    return arr;

}
que = new Queue();
que.enqueue(3);
que.enqueue(2);
que.enqueue(2);
//que.dequeue();
//que.dequeue();
console.log(que.front);
//console.log(que.front());
console.log(que.peek());