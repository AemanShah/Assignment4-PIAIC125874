var currentDate = new Date();
document.write("Current date:"+currentDate);
var updatedHours =currentDate.getHours();
currentDate.setHours(updatedHours - 1);
document.write("<br>1 hour ago it was "+currentDate);