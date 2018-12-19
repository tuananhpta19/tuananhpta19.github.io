var dem = 0;
document.write("Các số chia hết cho 3 hoặc 7 trong khoảng thì 1 đến 100 là: ")
for (var i = 1; i <=100 ; i++) {
	if(i % 3 == 0|| i % 7==0){
		document.write("&nbsp"+i);
		dem++;
	}
}
document.write("<br>");
document.write("Số lượng các số chia hết cho 3 hoặc 7 trong khoảng từ 1 đến 100 là: "+dem);