var socket = io();
document.querySelector('form').addEventListener("submit", function(e){
	var location1 = document.getElementById('location1').value
	var location2 = document.getElementById('location2').value
	e.preventDefault();
	socket.emit('search',{one:location1, two:location2})
})

socket.on('data', function(data){
	$(".info").html("<p>Fare from <b>"+ data.from +"</b> to <b>" + data.to + "</b> using a: </p>")
	$("#results").html("<div><h2>Bus</h2><p>Peak : "+ data.bus.peak+"</p><p>Offpeak : "+ data.bus.offpeak +"</p></div><div><h2>Mathree</h2><p>Peak : "+data.mathree.peak+"</p><p>Offpeak : "+ data.mathree.offpeak +"</p></div><div><h2>Matatu</h2><p>Peak : "+data.matatu.peak+"</p><p>Offpeak : "+ data.matatu.offpeak +"</p></div>")
	$("#results div").css({
		"height":"14em",
		"width":"10em",
		"display":"flex",
		"flex-direction":"column",
		"align-items":"center",
		"background-color":"#1abc9c",
		"margin-bottom":"1em",
		"align-self":"center",
		"box-shadow":"2px 2px 7px grey"
	})
	$("#results h2").css({
		"text-align":"center",
		"color":"white"
	})
	$("#results p").css({
		"font-size":"1.3em",
		"font-family":"serif",
		"color":"white"
	})
	$(".info p").css({
		"font-size":"1.3em",
		"text-align":"center"
	})
})

socket.on('none',function(){
	$("#results").html("<div><p>Unfortunately, we don't have that route in our system. Add it by clicking 'Add a route at the top of the page'"</p></div>")
	$("#results div").css({
		"background-color":"#B33A3A",
		"margin-top":"0.5em"
	})
	$("#results div p").css({
		"font-family":"Arial",
		"color":"#fafafa",
		"font-size":"1.2em",
		"text-align":"center",
		"box-shadow":"1px grey",
		"padding":"0.5em"
	})
})
