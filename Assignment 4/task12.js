var date = new Date();
var day = date.getDate();
if(day < 16){
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}