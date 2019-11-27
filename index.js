const _ = require('lodash');

const numbers = [33,46,34,78,94];


_.each(numbers, function(number, i){
	console.log(number);
});