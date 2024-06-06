class Node{
    constructor(data,next=undefined){
        this.data=data,
        this.next=next
    }
}

function LinkedList(arr){
    const head=new Node(arr[0]);
    let mover=head;
    for(let i=1;i<arr.length;i++){
        let temp=new Node(arr[i]);
        mover.next=temp;
        mover=mover.next
    }
    return head;
}

const linkedList=LinkedList([1,2,3,4])

function reverseLinkedList(head){
    if(head===null||head.next===null){
        return head
    }

    let stack=[];
    let temp=head;
    while(temp!==undefined){
        stack.push(temp.data)
        temp=temp.next;
    }

    temp=head;

    while(temp!==undefined){
        temp.data=stack.pop();
        temp=temp.next;
    }
    return head
}

console.log(reverseLinkedList(linkedList))