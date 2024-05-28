class Node {
  constructor(data1,next1=null) {
    this.data = data1;
    this.next = next1;
  }
}

function convertArr2LL(arr){
    const head=new Node(arr[0]);
    let mover = head;
    for(let i=1;i<arr.length;i++){
        let temp=new Node(arr[i]);
        mover.next=temp;
        mover=mover.next
    }
    // console.log(mover,head,'mover')
    return head
}



const head=convertArr2LL([2,3,4,5]);
let temp=head
while(temp!==null){
    console.log(temp.data);
    temp=temp.next
}

function lengthOfLL(arr){
    let count=0;
    const head=convertArr2LL(arr);
    let temp=head
    while(temp!==null){
        temp=temp.next
        count++
    }
    return count
}

function checkIfPresent(head,val){
    let temp=head;
    while(temp!==null){
        if(temp.data===val){
            return 1
        }
        temp=temp.next;
    }
    return  0
}

console.log(checkIfPresent(head,4),new Node(1))