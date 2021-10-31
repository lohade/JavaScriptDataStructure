let arr=new Array();
for(let i=0;i<10;i++){
    arr[i]=Math.round(Math.random() * 889 + 100)
    
}
console.log(arr);
var largest=arr[0];
var second_largest=arr[0];
for(var j=0;j<arr.length;j++){
    if(arr[j]>largest){
        second_largest=largest;
        largest=arr[j];
    }
    else if(arr[j]>second_largest && arr[j]!==largest){
        second_largest=arr[j];
    }
}
console.log("Second largest number:"+second_largest);

var smallest=arr[0];
var second_smallest=arr[0];
for(var k=0;k<arr.length;k++){
    if(arr[k]<smallest){
        second_smallest=smallest;
        smallest=arr[k];
        
    }
    else if(arr[k]<second_smallest && arr[k]!==smallest){
        second_smallest=arr[k];
    }
}
console.log("Second smallest number is:"+second_smallest);

//Q.2 Find second smallest and largest with sorting
let sortArray=arr.sort();
console.log(sortArray);
console.log("Second largest number:"+arr[arr.length-2]);
console.log("Second Smaalest number:"+arr[1]);