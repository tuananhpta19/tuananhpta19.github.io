var M = parseFloat(prompt("Nhap M:"));
var N = parseFloat(prompt("Nhap N:"));
var K= parseFloat(prompt("Nhap K:"));
var tong = 0;
var dem = 0;
if(M <= N){
	for(var i=M; i<=N;i++){
		if(i%K==0){
			dem++;
		}
	}
	if(dem==0){
		alert("Khong co so nao chia het cho k trong khoang tu "+M+" den "+N);
	}else{
		for(var i=M; i<=N;i++){
			if(i%K==0){
				parseFloat(tong+=i);
			}
		}
		alert(tong);
	}
}else{
	for(var i=N; i<=M;i++){
		if(i%K==0){
			dem++;
		}
	}
	if(dem==0){
		alert("Khong co so nao chia het cho k trong khoang tu "+N+" den "+M);
	}else{
		for(var i=N; i<=M;i++){
			if(i%K==0){
				parseFloat(tong+=i);
			}		
		}
		alert(tong);
	}
}