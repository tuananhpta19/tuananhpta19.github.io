
var name1 = document.getElementsByClassName('name1')[0];
var email1 = document.getElementsByClassName('email1')[0];
var phone1 = document.getElementsByClassName('phone1')[0];
var password1 = document.getElementsByClassName('password1')[0];
var confirmPassword1 = document.getElementsByClassName('confirmPassword1')[0];
var register=document.getElementById("register");
var clear=document.getElementById("clear");
register.addEventListener("click", function(){
	if(name1.value==''){
		document.getElementsByClassName('check-name')[0].innerHTML="bạn chưa nhập tên";
	}else if(name1.value.length<8){
		document.getElementsByClassName('check-name')[0].innerHTML="tên phải lớn hơn 8 kí tự";
	}else{
		document.getElementsByClassName('check-name')[0].innerHTML="";
		var checkName=true;
	}
	// giới tính
	// email
	  var atpos = email1.value.indexOf("@");
	  var dotpos = email1.value.lastIndexOf(".");
		 if(email1.value==''){
			document.getElementsByClassName('check-email')[0].innerHTML="Bạn chưa nhập email";
		}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email1.value.length) {
		   	document.getElementsByClassName('check-email')[0].innerHTML="Email sai định dạng";
		  }else{
			document.getElementsByClassName('check-email')[0].innerHTML="";
			var checkEmail=true;
		}
	 // phone
	if(phone1.value==''){
	 	document.getElementsByClassName('check-phone')[0].innerHTML="Số điện thoại không được để trống";
	 }else if(isNaN(phone1.value)==true){
	 	document.getElementsByClassName('check-phone')[0].innerHTML="Số điện thoại phải ở dạng số";
	 }else{
	 	document.getElementsByClassName('check-phone')[0].innerHTML="";
	 	var checkPhone=false;
	 }
	 // password
	 if(password1.value==''){
	 	document.getElementsByClassName('check-password')[0].innerHTML="Bạn chưa nhập mật khẩu";
	 }else{
	 	document.getElementsByClassName('check-password')[0].innerHTML="";
	 	var checkPw= true;
	 }
	 // confirm password
	 if(confirmPassword1.value==""){
	 	document.getElementsByClassName('check-confirmPassword')[0].innerHTML="Bạn chưa xác nhận mật khẩu";
	 }else if(confirmPassword1.value!==password1.value){
	 	document.getElementsByClassName('check-confirmPassword')[0].innerHTML="Xác nhận mật khẩu không đúng";
	 }else{
	 	document.getElementsByClassName('check-confirmPassword')[0].innerHTML="";
	 	var checkCPw=true;
	 }
	 if(checkName==true&& checkEmail==true&&checkPhone==false&&checkPw==true&&checkCPw==true){
	 	alert('Đăng kí thành công');
	 }
});
clear.addEventListener('click', function(){
	name1.value='';
	phone1.value='';
	password1.value='';
	password1.value='';
});