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
}

function display(list) { //O(n) because has to traverse whole list to display the values
  let string = '';
  let tempNode = list.head;
  while (tempNode !== null) {
    string  = string + tempNode.value + ' ';
    tempNode = tempNode.next;
  }
  console.log(string);
}

function size(list) { //O(n) because has to traverse whole list to figure out size
  let length = 0;
  let currNode = list.head;
  while(currNode.next !== null) {
    length++;
    currNode = currNode.next;
  }
  return length;
}

function isEmpty(list) { //O(1) because just has to check if the head is null or not
  if(list.head === null) {
    return 'List is empty';
  }
}

function findPrevious(list, item) { //O(n) because has to traverse the list to find the item and keep track of the previous item
  let currNode = list.head;
  let previousNode  = list.head;
  while(currNode.value !== item) {
    previousNode = currNode;
    currNode = currNode.next;
    if(currNode.value === item) {
      return previousNode.value;
    }
  }
}

function findLast(list) { //O(n) because has to traverse through entire list
  let currNode = list.head;
  while(currNode.next !== null) {
    currNode = currNode.next;
    if(currNode.next === null) {
      return `${currNode.value} is last item`;
    }
  }
}

function reverseList(list) { //O(n) because has to go through whole list
  let currNode = list.head;
  let previousNode;
  let nextNode;
  if(list.head === null) {
    console.log('No items in list');
    return;
  }
  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = nextNode;
  }
  list.head = previousNode;
  return previousNode;
}

function thirdFromEnd(list) { //O(n) because has to go through whole list
  let currNode = list.head;
  console.log(currNode);
  let previousNode = list.head;
  let nodeBefore = list.head;
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

function middle(list) { //O(n) because has to go through whole list
  let currNode = list.head;
  let nextNode = list.head;
  while(nextNode !== null && nextNode.next !== null) {
    currNode = currNode.next;
    nextNode = nextNode.next.next;
  }
  return currNode.value;
}

function cycleList(list) {
  let flag = Math.random();
  let currNode = list.head;
  while(currNode !== null) {
    if(currNode.value === flag) {
      return true;
    }
    currNode.value = flag;
    currNode = currNode.next;
  }
  return false;
}

function findCycle(list) {
  let fast = list.head;
  let slow = list.head;
  while(slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      console.log('Found cycle');
      return;
    }
  }
  console.log('No cycle found');
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
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  // display(SLL);
  // size(SLL);
  // console.log(JSON.stringify(SLL));
  // isEmpty(SLL);
  // findPrevious(SLL, 'Boomer');
  // findLast(SLL);
  // reverseList(SLL);
  // console.log(JSON.stringify(SLL));
  // thirdFromEnd(SLL);
  // middle(SLL);
  // findCycle(SLL);
  // cycleList(SLL);
  // SLL.head.next.next = SLL.head;
  // findCycle(SLL);
  // console.log(cycleList(SLL));
}
main();

// 4
/**
 * Mystery program 
 * Eliminating duplicates from the linked list
 * O(n^2) because nested while loops
 */