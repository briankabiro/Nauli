var socket = io();
document.querySelector('form').addEventListener("submit", function(e){
	var location1 = document.getElementById('location1').value
	var location2 = document.getElementById('location2').value
	var busPeak = document.getElementById('bus-peak')
	var mathreePeak = document.getElementById('mathree-peak')
	var matatuPeak = document.getElementById('matatu-peak')
	var busOffpeak = document.getElementById('bus-offpeak')
	var mathreeOffpeak = document.getElementById('mathree-offpeak')
	var matatuOffpeak = document.getElementById('matatu-offpeak')
	e.preventDefault();

	socket.emit('add',{location1:location1, location2:location2, busPeakFare:busPeak, busOffpeakFare:busOffpeak, mathreePeakFare:mathreePeak, mathreeOffpeakFare:mathreeOffpeak, matatuPeakFare:matatuPeak, matatuOffpeakFare:matatuOffpeak})
})
socket.on('email', function(){
	$(".fare-inputs").append("<div class='response'><p>Thank You! We have received your message</p></div>")
	$(".response").css({
		"background-color":"#c0392b",
		"padding":"0.1em",
		"margin-top":"0.5em"
	})
	$(".response p").css({
		"color":"white",
		"font-family":"Calibri"
	})
})