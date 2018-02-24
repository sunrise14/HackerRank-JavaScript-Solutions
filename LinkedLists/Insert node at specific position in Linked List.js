function insert(head, data, position) {
    var newNode = new Node(data);
    if(position === 0){
        newNode.next = head;
         head = newNode;
    }
    else{
   
   var index = 0;
    var prev;
    var current = head;
    while(index++ < position){
        prev = current;
        current = current.next; 
    }
   newNode.next = current;
    prev.next = newNode;
}
    return head;
}