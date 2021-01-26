var num =prompt("Enter a number:");
var b = num.split("");
console.log(b);
var sum = 0;
for (i=0;i<b.length;i++){
    sum = sum +Number(b[i]);
}
console.log("Sum is "+sum);
var avg = sum/b.length;
console.log("Average is :"+avg);