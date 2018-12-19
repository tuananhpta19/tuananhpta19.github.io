
function a(){
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j<= i; j++) {
			document.write(" * ");
		}
	document.writeln("<br>");
	}
}
a();
document.writeln("<br>");
// ---
function b(){
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j<= 7; j++) {
			document.write(" * ");
		}
		document.writeln("<br>");
	}
}
b();
document.writeln("<br>");
// --
function c(){
	for(var i=1;i<=7;i++)
	{
		if(i == 1|| i == 7){
			for(var j = 1; j <=7;j++){
				document.write(" * ");
			}
			document.write("<br>");
		}else{
			for(var j = 1; j <=7;j++){
				if(j == 1|| j ==7){
					document.write(" * ");
				}else{
					document.write(" &nbsp&nbsp ");
				}
			}
			document.write("<br>");
		}
	}	
}
c();
document.writeln("<br>");
// --
function d(){
	for(var i = 7; i >= 1;i--){
		for(var j = 1; j<=i; j++){
			document.write(" * ");
		}
		document.write("<br>");
	}
}
d();