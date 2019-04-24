const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

// var currDate = new Date();
// var month = currDate.getMonth() + 1;
// var day = currDate.getDate();
// var year = currDate.getFullYear();
// var hour = currDate.getHours();
// var min = currDate.getMinutes();
// var second = currDate.getSeconds();

// if (day < 10) day = "0" + day;

// if (month < 10) month = "0" + month;

// if (min < 10) min = "0" + min;

// if (second < 10) second = "0" + second;

// if (hour < 12) var dayNight = "AM";
// else var dayNight = "PM";

// if (hour == 0) hour = 12;
// if (hour >= 13) hour -= 12;

// document.write(month + "-" + day + "-" + year + " " + "at " + hour + ":" + min + ":" + second + " " + dayNight);

// document.write('<html><body style= "color:green; font-family:Times New Roman; font-size:18pt">  </body></html>');

export default dateTime;