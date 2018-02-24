function compareLinkedLists( headA, headB) {
    if (headA === null && headB === null){
        return 1;
    }
    else{
        var current1 = headA;
        var current2 = headB;
        while (current1 !== null && current2 !== null){
            if (current1.data !== current2.data){return 0;}
            current1= current1.next; 
            current2= current2.next;
            
        }
      return (current1 === null && current2===null)?  1: 0;
        }
        
    }