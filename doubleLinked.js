class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinked {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.tail = new _Node(item, this.tail);
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.tail;
      console.log(tempNode.prev);
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // this.prev = 'test';
      // this.prev = tempNode;
      tempNode.next = new _Node(item, null, tempNode.prev);
      this.tail = tempNode.next;
      console.log(tempNode.prev);
    }
  }

  insertBefore(item, next) {
    // if(this.head === null) {
    //   this.insertFirst(item);
    // } else {
    //   let currNode = this.head;
    //   let prevNode = this.head;
    //   // console.log(currNode);
    //   // console.log('prev',prevNode);
    //   while(currNode.value !== next) {
    //     this.prev = prevNode;
    //     console.log(this.prev);
    //   }
    // }
  }

  insertAfter() {

  }

  insertAt() {

  }

  remove(item) {
    if(!this.head) {
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    if(this.tail.value === item) {
      this.tail = this.tail.prev;
    }
    let currNode = this.head;
    let prevNode = this.prev;
    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find() {

  }

  reverse() {
    // should just be a matter of switching the head and the tail and the prev and next pointers
  }
}

function mainDLL() {
  let DLL = new DoubleLinked();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  // DLL.insertLast('Gemenon');
  // DLL.insertLast('Picon');
  // DLL.insertLast('Sagittaron');
  // DLL.insertLast('Tauron');
  // DLL.remove('Picon');
  // DLL.insertBefore('test');
  console.log(JSON.stringify(DLL));
}
mainDLL();