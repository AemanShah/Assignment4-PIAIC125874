var a = prompt("This string must contain @\n"+
"b. Ths string must contact chars\n"+
"c. The @ must have at least 1 char in front\n"+
"d. The string must contain .(dot) after @ and at least 1 char.");
var email =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
if(a.match(email)){
    document.write("valid email");
}
else{
    document.write("Invalid email");
}