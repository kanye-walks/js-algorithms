 /*  Adapted from Prof. John Guttag Python implementation */

"use strict";
function selSort(l) {
    /*  Assumes l is a list of elements that can be compared using >.
        Sorts l in ascending order 
    */
    for (let i = 0; i < l.length; i++ ) {
        //invariant: l.splice(0,i) is sorted
        var minIndx = i;
        var minVal =l[i];
        var j=i+1;
        while (j < l.length){
            if(minVal > l[j]){
                minIndx = j;
                minVal = l[j]
            }
            j+=1;
        }
        var temp = l[i];
        l[i] = l[minIndx];
        l[minIndx] = temp;
        console.log('partially sorted list ' + l);
    }
}
var myar=[99,3,67,2,89, 26, 12,1,4];
selSort(myar);

