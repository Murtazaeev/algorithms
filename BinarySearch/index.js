// naive string solution

function naiveString(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i + j], short[j]);
      if (short[j] !== long[i + j]) {
        console.log("Break !");
        break;
      }

      if (j == short.length - 1) {
        console.log("Fount one !");
        count++;
      }
    }
  }
  return count;
}
// console.log(naiveString("Temur loled", "lol"));

// ! singly linked list push

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();

list.push("hello");
list.push("wassup");
// console.log(list);
