function insert(head, data) {
    var newNode = new Node(data);
    if(head === null){
        head = newNode;
       
    }
    else{
       var current = head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
 return head;
}
