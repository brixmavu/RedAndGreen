(function(){
setBackgoundColor ('square', 'green');
var sqr=document.getElementById("square").backgoundColor;
if (sqr == "green") {
	alert("sucesss");
} else{
	alert("failure");
}


setBackgoundColor ('square', "red");
var sqr=document.getElementById("square").backgoundColor;
if (sqr == "red") {
	alert("failure");
} else{
	alert("sucesss");
}

})();
