var next =document.getElementById("next");
next.addEventListener("click", function () {
	var active = document.getElementsByClassName("active");
	active.className="";
	if(active.nextElementSibling.src!=undefined)
		active.nextElementSibling.className="active";
	else
		document.getElementsByTagName("img")[0].className="active";
});

var back=document.getElementById("back");
back.addEventListener("click", function(){
	var active=document.getElementsByClassName("active");
	var img=document.getElementsByTagName("img");
	if(active.previousElementSibling!=null)
		active.previousElementSibling.className="active";
	else
		img.[img.length-1].className="active";
});