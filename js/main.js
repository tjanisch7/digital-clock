
function startClock(){

var today = new Date();

// grab the hours, minutes, and seconds of the clock 
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var ap = "AM";

// grab the day, month, and year
var d = today.toDateString();


// add AM/PM depending on the time
if(h > 11) {ap = "PM"};
if(h > 12) {h = h - 12};
if(h == 0) {h = 12};

// adding zeros in front of numbers < 10
m = checkTime(m);
s = checkTime(s);

// grab the h1 element on html and append clock to it
var clock = document.getElementById("clock");
clock.textContent = d + ", " + h + ":" + m + ":" + s + " " + ap
t = setTimeout('startClock()', 1000);


}

function checkTime(i) {
	if(i < 10) {
		i = "0" + i
	}
	return i
}

window.onload = startClock;



