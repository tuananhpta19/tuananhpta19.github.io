do{
	var n;
	n=parseInt(prompt("Nhap n nguyen duong: "));
}while (n<= 0);
var tong = 0;
var giaithua= 1;
for (var i = 1; i <= n; i++) {
	giaithua*=i;
	parseFloat(tong+=(i/giaithua));
}
alert(tong);