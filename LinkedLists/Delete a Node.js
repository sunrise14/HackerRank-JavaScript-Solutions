function deleteNode(head, position) {
    var current = head;
    if(position === 0){
        head = current.next;
    }
    else{
        var index = 0;
        var previous;
        while(index++ < position){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
    return head;
}