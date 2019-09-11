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
    let node = new _Node(item, this.head, null);
    if(this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
    if(this.tail === null) {
      this.tail = node;
    }
  }

  insertLast(item) {
    let node = new _Node(item, null, this.tail);
    if(this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    if(this.head === null) {
      this.head = node;
    } 

  }

  insertBefore(item, next) {
    let newNode = new _Node(item, null, null);
    let currNode = this.head;
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    while(currNode.value !== next) {
      currNode = currNode.next;
    }
    newNode.next = currNode;
    newNode.prev = currNode.prev;
    currNode.prev.next = newNode;
    currNode.prev = newNode;
  }

  // shows right values in console log on line 70 but not showing up in display function
  // weird because works for insertAt method and same logic
  insertAfter(item, prev) {
    let newNode = new _Node(item, null, null);
    let currNode = this.head;
    if(this.head === null) {
      this.head = newNode;
    }
    if(this.tail === null) {
      this.tail = newNode;
    }
    while (currNode.value !== prev) {
      currNode = currNode.next;
    }
    newNode.prev = currNode;
    newNode.next = currNode.next;
    currNode.next.prev = newNode;
    currNode.prev = newNode;
    console.log(newNode);
  }

  insertAt(item, position) {
    let counter = 0;
    let currNode = this.head;
    let newNode = new _Node(item, null, null);
    if(position === 0) {
      this.head = new _Node(item, currNode.next, null);
    }
    while(counter < position - 1) {
      currNode = currNode.next;
      counter++;
    }
    newNode.prev = currNode;
    newNode.next = currNode.next;
    currNode.next.prev = newNode;
    currNode.next = newNode;
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
    currNode.next.prev = prevNode;
  }

  find(item) {
    let currNode = this.head;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if(currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

function display(list) {
  let string = '';
  let tempNode = list.head;
  while (tempNode !== null) {
    string = string + tempNode.value + ' ';
    tempNode = tempNode.next;
  }
  console.log(string);
}

function reverse(list) {
  // should just be a matter of switching the head and the tail and the prev and next pointers
  let first = list.head;
  let last = list.tail;
  if(list.head.value === list.tail.value) {
    console.log('Only one item in list, cannot reverse');
    return;
  }
  if(list.head === null) {
    console.log('No items in list');
    return;
  }
  let currNode = list.head;
  let prevNode;
  let nextNode;
  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.head = prevNode;
  list.tail = nextNode;
  // return prevNode;
}

function mainDLL() {
  let DLL = new DoubleLinked();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  // display(DLL);
  reverse(DLL);
  // DLL.insertAfter('test', 'Gemenon');
  // display(DLL);
  // DLL.insertAt('test', 2);
  console.log(DLL.head);
}
mainDLL();