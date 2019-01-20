$(function(){
	$(".register").on("click",function(){
		var name = $(".name").val();
		var email=$(".email").val();
		var phone = $(".phone").val();
		var note = $(".note").val();
		var check = 0;
		if(name ==""){
			$(".named").html("Vui lòng nhập tên");
		}else{
			$(".named").html("");
			check++;
		}
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if(email==""){
			$(".emailed").html("Vui lòng nhập email");
		}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			$(".emailed").html("Dạng địa chỉ email chưa đúng");
		}else{
			$(".emailed").html("");
			check++;
		}
		if(phone==""){
			$(".phoned").html("Vui lòng nhập số điện thoại");
		}else  if(isNaN(phone)==true){
			$(".phoned").html("Vui lòng nhập số điện thoại ở dạng số");
		}else{
			$(".phoned").html("");
			check++;
		}
		if(note==""){
			$(".noted").html("Bạn chưa nhập nội dung");
		}else{
			$(".noted").html("");
			check++;
		}
		if(check==4){
			alert("Góp ý thành công");
		}
	});
	
});