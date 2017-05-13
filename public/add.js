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

	socket.emit('add',{one:location1, two:location2, three:busPeak, four:busOffpeak, five:mathreePeak, six:mathreeOffpeak, seven:matatuPeak, eight:matatuOffpeak})
})