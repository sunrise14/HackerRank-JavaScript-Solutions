function mergeLinkedLists( headA, headB) {

    var current1 = headA;
    var current2 = headB;
    var sort;
    if(current1 === null) return current2;
    if (current2 === null) return current1;
    if(current1 && current2){
      if(current1.data <=current2.data){
      sort = current1;
      current1 =sort.next;
      }
      else{
        sort =current2;
        current2=sort.next;
    
    }
    
  }
    var new_head = sort;
    while(current1 && current2){
    if(current1.data <= current2.data){
      sort.next = current1;
      sort= current1;
      current1 = sort.next;
      
    }
      else{
      sort.next =current2;
        sort = current2;
        current2 =sort.next;
      
      }
    
    }
    if(current1 === null) sort.next = current2;
    if(current2 === null) sort.next = current1;
    return new_head;
}  