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
//selSort(myar);

function merge(left, right, fn) {
    /*  Assumes left and right are sorted lists
        lt is the callback that defines the ordering of the lists
        Returns a new sorted (by lt) list containing the same elements
        as (left + right) would contain
    */
    var i = 0,
        j = 0,
        result = [];
    while (i < left.length && j < right.length) {
        if(fn(left[i],right[j])){
            result.push(left[i]);
            i+=1;
        } else {
            result.push(right[j]);
            j+=1;
        }
    }

    while (i < left.length){
        result.push(left[i]);
        i+=1;
    }

    while (j < right.length){
        result.push(right[j]);
        j+=1;
    }

    return result;

}

function sort(l, fn){
    /*Returns a new sorted list containing the same elements as l*/
    if (l.length < 2) {
        return l.slice();
    } else{
        var middle = parseInt(l.length/2);
        console.log('middle is ' + middle);
        var left = sort(l.slice(0,middle), fn);
        var right = sort(l.slice(middle,l.length), fn);
        console.log('About to merge ' +  left + ' and ' + right);
        return merge(left, right, fn);
    }
}

/*
var l1 = [1,6,56,90];
var l2 = [3,8,70,222];
var newl = merge(l1,l2);
console.log('sorted list = ' + newl);
*/

var L = [35, 4, 5, 29, 17, 58, 0]
var newL = sort(L, function(x,y){return (x < y)})
console.log('Sorted list =' + newL);


