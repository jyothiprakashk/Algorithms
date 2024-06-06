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

const linkedList=LinkedList([1,2,3,4,5,6,7,0]);

function middleElement(head){
    let fast=head;
    let slow=head;

    while(fast&&fast.next&&slow){
        console.log(fast)
        fast=fast.next.next;
        slow=slow.next
    }
    return slow
    // let temp=head;
    // let count=0;
    // while(temp!==undefined){
    //     count++;
    //     temp=temp.next
    // }
    // let mid=Math.floor(count/2)+1;
    // temp=head;
    // while(temp!==undefined){
    //     mid=mid-1;
    //     if (mid === 0) {
    //         // Break out of the loop
    //         // to return temp
    //         break;
    //     }
    //     console.log(temp.next,'tempnext')
    //     temp=temp.next
    // }
    // console.log(head,mid,'amma');
    // return temp
}

console.log(middleElement(linkedList).data)

