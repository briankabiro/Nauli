/* 
	receive the two parameters from socket.io
	take them and search if there is any document with the same name as the first parameter
	if yes, look through to see if any element in the array has a place as second parameter
	if yes return results

	if no to first. check if there is any doc with same name as second parameter
	if yes repeat second step, if no return hiyo haipo hapa
	if yes to second step, return results

	Display results as three columns designed as cards with icon at top as photo and peak and offpeak price below: matatu, mathree, bus
	Peak and Offpeak
	display n/a in the event none of them is there
*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server)
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var URL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test1';

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

app.get('*', function(req,res){
	res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('add', function(req,res){
	res.sendFile(path.join(__dirname + '/public/add.html'))
})

io.on('connection', function(socket){

	socket.on('search', function(data){
		data.one = data.one.toLowerCase();
		data.two = data.two.toLowerCase();
		console.log(data.one, data.two)		
		MongoClient.connect(URL, function(err,db){
			if(err) console.log("Error",err);
			var collection = db.collection('places');
			collection.find({$or: [{from:data.one, to:data.two}, {from:data.two, to:data.one}]}).toArray(function(err, docs){
				if(err) console.error(err)
				if(docs[0]){
					socket.emit('data', docs[0]);			
				}else{
					console.log("No documents were found")
					socket.emit('none')
				}
				db.close();
			})
		})		
	})
})

server.listen(port);
console.log('listening')