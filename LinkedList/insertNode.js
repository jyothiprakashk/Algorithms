class Node {
  constructor(data, next=null) {
    this.data = data; 
    this.next = next;
  }
}

function ConvertArrToLL(arr) {
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = mover.next;
  }
  return head;
}

let linkedList = ConvertArrToLL([10, 20, 30, 40]);

function InsertNodeInFirstPosition(value) {
  const node = new Node(value);
  node.next = linkedList;
  return node;
}

console.log(InsertNodeInFirstPosition(100))

