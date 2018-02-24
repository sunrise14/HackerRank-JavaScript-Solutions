function reversePrint(head) {
    var current = head;
    var arr = [];
    while(current){
        arr.push(current.data);
        current = current.next;
    }
    var a = arr.reverse();
    for(var i=0; i<a.length; i++){
        console.log(a[i]);
    }
    
}