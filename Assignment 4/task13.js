
var currentDate = new Date();
document.write("Current date :"+currentDate);
var milliSeconds = currentDate.getTime();
document.write("<br>Elapsed milliseconds since January 1,1970:"+milliSeconds);
document.write("<br>Elapsed minutes since January 1,1970:"+milliSeconds/(1000*60));