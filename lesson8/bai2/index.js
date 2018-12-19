var tong = 0;
var dem = 0;
for (var i = 0; i < 100; i++) {
	if(i%2==0 ){
		tong+=i;
		dem++;
	}
	if(dem==10){
		break;
	}
}


alert(tong);