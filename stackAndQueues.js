// What is the difference between stack and queue?
// Stack is a collection of objects that works in LIFO (Last in First out) mechanism while Queue is FIFO (First in First out).
// This means that the object that is inserted first is removed last in a stack while an object that is inserted first is removed first in a queue.
class Queues{
  constructor(input){
    this.array=input
    }

  add(input){
    this.array.push(input)
  }

  remove(){
    return this.array.shift()
  }
}

class Stack{
  constructor(input){
    this.array=input
    }

  add(input){
    this.array.push(input)
  }

  remove(){
    return this.array.pop()
  }
}

//
let a = new Stack([1,2])
console.log(a);
a.add(3)
console.log(a);
console.log(a.remove())
console.log(a);
