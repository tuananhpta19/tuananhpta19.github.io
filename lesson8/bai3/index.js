do{
	var n;
	n=parseInt(prompt("Nhap n nguyen duong: "));
}while (n<= 0);
var tong = 0;
for (var i = 1; i <= n; i++) {
	parseFloat(tong+=(1.0/i));
}
alert(tong);