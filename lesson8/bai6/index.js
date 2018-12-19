do{
	var n;
	n=parseInt(prompt("Nhap n nguyen duong: "));
}while (n<= 0);
var tong = 0;

do {
	tong+=n;
	n--;
} while (n>0);
alert(tong);