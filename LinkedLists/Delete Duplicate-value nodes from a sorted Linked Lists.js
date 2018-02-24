function removeDuplicates(head) {
    var current = head;
    if(current === null){
        return null;
    }
    while(current.next !== null){
        if (current.data === current.next.data){
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
};