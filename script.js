var socket = io.connect('http://localhost:3000') 

var app = new Vue({
	el: '#prikazPodatakaSenzora',
	data: {
		message: ''
	}
})

socket.on('update', function(data){
	app.message = data
})
