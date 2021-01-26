var pw = prompt("Enter your password:\n"+
"a. It should contain alphabets and numbers\n"+
"b. It should not start with a number \n"+
"c. It must at least 8 characters long");
if (pw.charAt(0) == 1 || pw.charAt(0) == 2 || pw.charAt(0) == 3 || pw.charAt(0) == 4
    || pw.charAt(0) == 5 ||pw.charAt(0) == 6 || pw.charAt(0) == 7 || pw.charAt(0) == 8||
    pw.charAt(0) == 9 || pw.charAt(0) == 0){
    document.write("Password should not start with number");
}
else if (pw.match(/[a-zA-Z0-9]/g)){
    if(pw.length >=8)
        document.write("<br>Password is valid and containing numbers and words and length of greater than 8");
    else{
        document.write("Password should be of length 8")
    }
}
