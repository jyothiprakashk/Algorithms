class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}


function convertLinkedList(arr){
    let head=new Node(arr[0])
    let mover=head;
    for(let i=1;i<arr.length;i++){
        let temp=new Node(arr[i])
        mover.next=temp;
        mover=mover.next
    }
    return head
}

const linkedList=convertLinkedList([4,5,1,9])

function deleteNode(head,node){
    if(!head) return null

    if(head.data===node){
        return head.next
    }

    let temp=head;
    while(temp.next){
        if(temp.next.data===node){
            temp.next=temp.next.next
            return head
        }
        temp=temp.next
    }
    console.log(head)
    return head
}

let linkedListArray=deleteNode(linkedList,5);

function convertToArray(head){
    let temp=head;
    let arr=[]
    while(temp){
        arr.push(temp.data)
        temp=temp.next
    }
    return arr
}

console.log(convertToArray(linkedListArray))