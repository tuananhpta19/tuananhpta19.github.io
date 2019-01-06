$(function(){
	var dem =1;
	$(".next").on("click", function(){
		switch(dem) {
			case 1:
				account();
				break;
			case 2:
				profile();
				break;
			case 3:
				warning();
				break;
			case 4:
				finish();
				break;
		}
	});
	function account(){
		var check = 0;
		var userName = $(".userName").val();
		var password = $(".password").val();
		var confirmPassword = $(".confirmPassword").val();
		if(userName==""){
			$(".userNameerr").html("Vui lòng nhập tên");
		}else{
			$(".userNameerr").html("");
			check++;
		}
		if(password==""){
			$(".passwordeerr").html("Vui lòng nhập mật khẩu");
		}else{
			$(".passwordeerr").html("");
			check++;
		}
		if (confirmPassword=="") {
			$(".confirmPasswordeerr").html("Nhập lại mật khẩu ");
		}else if(password!=confirmPassword){
			$(".confirmPasswordeerr").html("Nhập lại mật khẩu không đúng ");
		}
		else{
			$(".confirmPasswordeerr").html("");
			check++;
		}
		if(check==3){
			dem=2;
			var now= $(".display");
			now.attr("class","content");
			now.next().attr("class","content display");
			var active= $(".active");
			active.attr("class", "tablinks");
			active.next().attr("class", "tablinks active");
			var prev = $(".previous");
			prev.css("background"," #4184be");
		}
	}
	function profile(){
		var check=0;
		var fName = $(".fName").val();
		var lName=$(".lName").val();
		var email=$(".email").val();
		var address=$(".address").val();
		var age=$(".age").val();
		if(fName==""){
			$(".firstNameerr").html("Vui nhập tên");

		}else{
			$(".firstNameerr").html("");
			check++;
		}

		if(lName==""){
			$(".lastNameerr").html("Vui lòng nhập tên");
		}else{
			$(".lastNameerr").html("");
			check++;
		}

	 var atpos = email.indexOf("@");
	  	var dotpos = email.lastIndexOf(".");
		if(email==""){
			$(".emaileerr").html("Vui lòng nhập email");
		}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		   $(".emaileerr").html("Dạng địa chỉ email chưa đúng");
		 }else{
			$(".emaileerr").html("");
			check++;
		}

		if(address==""){
			$(".addresseerr").html("Vui lòng nhập address");
		}else{
			$(".addresseerr").html("");
			check++;
		}
		if(age==""){
			$(".ageerr").html("Vui lòng nhập tuổi");
		}else  if(isNaN(age)==true){
			$(".ageerr").html("Vui lòng nhập tuổi ở dạng số");
		}
		else{
			$(".ageerr").html("");
			check++;
			if(age<18){
			dem=3;
			var now= $(".display");
			now.attr("class","content");
			now.next().attr("class","content display");
			var active= $(".active");
			active.attr("class", "tablinks");
			active.next().attr("class", "tablinks active");
			var prev = $(".previous");
			prev.css("background"," #4184be");
		}else{
				dem=4;
				var now= $(".display");
				now.attr("class","content");
				now.next().next().attr("class","content display");
				var active= $(".active");
				active.attr("class", "tablinks");
				active.next().next().attr("class", "tablinks active");
				var prev = $(".previous");
				prev.css("background"," #4184be");
			}
		}
	}
	function warning(){
		
	}
	function finish(){
		
	}
	// --previous--
	$(".previous").on("click", function(){
		if(dem==1){
		 	var now= $(".display");
			now.attr("class","content");
			now.attr("class","content display");
			var active= $(".active");
			active.attr("class", "tablinks");
			active.attr("class", "tablinks active");
		}else if(dem==2||dem == 3){
			var now= $(".display");
			now.attr("class","content");
			now.prev().attr("class","content display");
			var active= $(".active");
			active.attr("class", "tablinks");
			active.prev().attr("class", "tablinks active");
		}if(dem==4){
			var now= $(".display");
			now.attr("class","content");
			now.prev().prev().attr("class","content display");
			var active= $(".active");
			active.attr("class", "tablinks");
			active.prev().prev().attr("class", "tablinks active");
		}
	});
});
