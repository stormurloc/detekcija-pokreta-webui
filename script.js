var socket = io.connect('http://localhost:3000') 

var app = new Vue({
	el: '#prikazPodatakaSenzora',
	data: {
		message: ''
	}
})

var i = 0;
socket.on('update', function(data){
	console.log(data)
	if(data == 123 && i < 5){
		app.message = app.message + '+'
		i++
		console.log(i)
	}
	else if(data == 321 && i > 0){
		i--
		app.message = ''
		for(j = 0; j < i; j++){
			app.message = app.message + '+'
		}
		console.log(i)
	}
})
