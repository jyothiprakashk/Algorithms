class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}


function convertLinkedList(arr){
    let head=new Node(arr[0]);
    let mover=head;
    for(let i=1;i<arr.length;i++){
        let temp=new Node(arr[i]);
        mover.next=temp;
        mover=mover.next
    }
    return head
}

let linkedList=convertLinkedList([100,99,88,90,9])


function searchElement(head,value){
    let current=head;
    let count=0
    while(current){
        if(current.data===value){
            return 1
        }
        current=current.next
    }
    return 0
}

console.log(searchElement(linkedList,100))