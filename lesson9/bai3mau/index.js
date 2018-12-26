var tabs = document.getElementsByClassName("tab");
for(var i = 0; i<tabs.length;i++){
	tabs[i].addEventListener("click", function(){
		var active = document.getElementsByClassName("active")[0];
		active.className="section";
		this.parentNode.className="section active";
	});
}