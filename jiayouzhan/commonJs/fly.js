
var a = '这是一条log';
var b = 1;

const print = function(e){
	console.log(b+e);
}

const wuli = function(str){
	console.log(a+str)
}

module.exports = {
	print,
	wuli
}
