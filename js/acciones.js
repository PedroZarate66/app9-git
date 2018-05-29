// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});

function onDeviceReady(){
	
	$('#position').on('click', function(){
		getPosition ();
	});
	
	$('#watch').on('click', function (){
		watchPosition ();
	});
	
}

function getPosition(){
	var options ={
		enableHighAccuracy : true,
		maximumAge: 3600000
	}
	
	var watchID = navigator.grolocation.getCurrentPosition(onSuccess, onError, options);
	function onSuccess(position){
		 
      alert('Latitude:'    +position.coords.latitude   +'\n'+
	  'Longitude:'     +position.coords.longitude    +'\n'+
	  'Altitude:'    +position.coords.altitude    +'\n'+
	  'Accuracy:'    +position.coords.accuracy    +'\n'+
	  'Altitude Accuracy:'    +position.coords.altitudeAccuracy    +'\n'+
	  'Heading:'    +position.coords.heading    +'\n'+
	  'Speed:'    +position.coords.speed    +'\n'+
	  'Timestamp:'    +position.timestamp    +'\n');
	};
	
	function onError(error){
		alert('code:'  +error.code +'\n'+'message:' +error.message +'\n');
	}
}

function watchPosition(){
	var options={
		maximumAge : 3600000,
		timeout : 3000,
		enableHighAccuracy : true,
	}
	
	var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
	function onSuccess(position){
		
$('#latitude').html(position.coords.latitude);
$('#longitud').html(position.coords.longitude);
$('#altitude').html(position.coords.altitude);
$('#accuracy').html(position.coords.accuracy);
$('#aaccuracy').html(position.coords.altitudeAccuracy);
$('#headingg').html(position.coords.heading);
$('#speed').html(position.coords.speed);
$('#timestamp').html(position.timestamp);
	};
	
	function onError(error){
		alert('code:'  +error.code  +'\n'+'message:' + error.message +'\n');
	}
}