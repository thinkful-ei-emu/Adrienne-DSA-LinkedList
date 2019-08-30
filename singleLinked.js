class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) { //O(1) since only inserting at 1 place regardless of length of list
    this.head = new _Node(item, this.head);
  }

  insertLast(item) { //O(n) because have to traverse through whole list before can insert
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { //O(n) because have to traverse through list to find node
    let currNode = this.head;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) { //O(n) becasue have to traverse through to find node want to remove
    if(!this.head) {
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, itemAfter) { // Fix so doing it all in one pass; O(n) because needs to go through potentially whole array before finding the key
    let after = this.find(itemAfter);
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let previousNode;
      while(currNode.value !== after.value) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      previousNode.next = new _Node(item, after);
    }
  }

  insertAfter(item, itemBefore) { //O(n) because will have to traverse through whole array in worst case scenario
    let before = this.find(itemBefore);
    let currNode = this.head;
    while(currNode.value !== before.value) {
      currNode = currNode.next;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, position) { //O(n) because has to go through list at least up to point of the position that is being passed in
    let counter = 0;
    let currNode = this.head;
    if(position === 0) {
      this.head = new _Node(item, currNode.next);
    }
    while(counter < position - 1) {
      currNode = currNode.next;
      counter++;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  // not sure where to start with this
  // know that I will need a while loop that probably just returns the values to some variable maybe? Would be the opposite of the point if push to an array
  display() {

  }

  size() { //O(n) because has to traverse whole list to figure out size
    let length = 0;
    let currNode = this.head;
    while(currNode.next !== null) {
      length++;
      currNode = currNode.next;
    }
    return length;
  }

  isEmpty() { //O(1) because just has to check if the head is null or not
    if(this.head === null) {
      return 'List is empty';
    }
  }

  findPrevious(item) { //O(n) because has to traverse the list to find the item and keep track of the previous item
    let currNode = this.head;
    let previousNode  = this.head;
    while(currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
      if(currNode.value === item) {
        return previousNode.value;
      }
    }
  }

  findLast() { //O(n) because has to traverse through entire list
    let currNode = this.head;
    while(currNode.next !== null) {
      currNode = currNode.next;
      if(currNode.next === null) {
        return `${currNode.value} is last item`;
      }
    }
  }

  reverseList() { //O(n) because has to go through whole list
    let currNode = this.head;
    let previousNode;
    let nextNode;
    if(this.head === null) {
      console.log('No items in list');
      return;
    }
    while(currNode !== null) {
      nextNode = currNode.next;
      currNode.next = previousNode;
      previousNode = currNode;
      currNode = nextNode;
    }
    this.head = previousNode;
    return previousNode;
  }

  thirdFromEnd() { //O(n) because has to go through whole list
    // work on tomorrow with casey; when the reverseList function is not commented out says that currNode.next is undefined or null and breaks program; but next is defined and it works if reverse list is commented out which is strange
    let currNode = this.head;
    console.log(currNode);
    let previousNode = this.head;
    let nodeBefore = this.head;
    while(currNode.next !== null) {
      nodeBefore = previousNode;
      previousNode = currNode;
      currNode = currNode.next;
      if(currNode.next === null) {
        // console.log(nodeBefore.value);
        return nodeBefore.value;
      }
    }
  }

  middle() { //O(n) because has to go through whole list
    let currNode = this.head;
    let nextNode = this.head;
    while(nextNode !== null && nextNode.next !== null) {
      currNode = currNode.next;
      nextNode = nextNode.next.next;
    }
    return currNode;
  }

  cycleList() {
    let currNode = this.head;
    // console.log(currNode.next.value);
    // potentially would want to check address 
  }

  WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        }
        else {
          newNode = newNode.next;
        }
      }
      current = current.next;
      console.log(current);
    }
  }
}

// 2 & 3
function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel'); //Item not found becasue was not in list to begin with
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // SLL.size();
  // console.log(JSON.stringify(SLL));
  // SLL.isEmpty();
  // SLL.findPrevious('Athena');
  // SLL.findLast();
  SLL.reverseList();
  console.log(JSON.stringify(SLL));
  SLL.thirdFromEnd();
  SLL.middle();
  // const cycleList = 
  // SLL.cycleList();
}
main();

// 4
/**
 * Mystery program 
 * Eliminating duplicates from the linked list?
 * O(n^2) because nested while loops?
 */