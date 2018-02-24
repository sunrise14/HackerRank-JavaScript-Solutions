function getNodeValue( head, position) {
    var current = head;
    var arr = [];

    while (current !== null){
       
        arr.push(current.data);   
         current = current.next;
    }
    var arr1 = arr.reverse();
   return arr1[position];
}