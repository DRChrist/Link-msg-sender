function sendMsg() 
{
	var XHR = new XMLHttpRequest();
	var recipient = document.getElementById('phoneNumber').value;
	var msg = document.getElementById('msg').value;
	var apikey = '9144c1399c5a764e3723245dbe3058f04191967bad388b3277d8a451566c60f4';
	var messageObj = {
		"message":{
			"recipients": recipient,
			"sender": "test",
			"message": msg,
			"status": true,
			"statusurl": "https://msg-dlr.localtunnel.me/dlr",
			"returndata": "my-own-data"
		}
	}
	XHR.addEventListener('error', function(event) {
		alert('Fejl, data ikke sendt.');
	})
	XHR.open('POST', 'http://api.linkmobility.dk/v2/message.json?apikey=' + apikey, true)
	XHR.setRequestHeader('Content-Type', 'application/json');
	XHR.send(JSON.stringify(messageObj));
}

function updateStatus()
{
	var XHR = new XMLHttpRequest();
	XHR.addEventListener('load', function(event) {
		console.log(event);
		document.getElementById('dlrStatus').innerHTML = event.srcElement.responseText;
	})
	XHR.open('GET', '/upd', true)
	XHR.send();
}

