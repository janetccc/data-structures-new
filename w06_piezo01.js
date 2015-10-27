var five = require("johnny-five");
var count = 0;
// var one = 0;
// var two = 0;

five.Board().on("ready", function() {

	var piezo = new five.Sensor({
		pin: 'A0',
		// freq: 250,
		threshold: 100,
	});

	piezo.scale(0, 1023).on("change", function() {  	
		count = count + 1;
		console.log('knock' + count);
		console.log(this.value);

		// one = this.value;
		// if ( ( one >= (two + 100))|| (one <= (two - 100))) {
		// 	console.log('Change');
		// } else {
		// 	console.log('...')
		// }
		// two = one;

	});

	//https://github.com/rwaldron/johnny-five/wiki/Sensor
});