$(function(){
	var number1=0;
	var number2=0;
	var number3=0;
	 var number4=0;
	$(".them1").on("click",function(){
		number1=number1+1;
		$(".number1").val(number1);
		$(".tru1").css("display","inline");
	});
	$(".tru1").on("click",function(){
		if(number1>0){
			number1=number1-1;
			$(".number1").val(number1);
		}else{
			$('.number1').removeAttr('value');
		}
	});
	$(".them2").on("click",function(){
		number2=number2+1;
		$(".number2").val(number2);
		$(".tru2").css("display","inline");
	});
	$(".tru2").on("click",function(){
		if(number2>0){
			number2=number2-1;
			$(".number2").val(number2);
		}else{
			$('.number2').removeAttr('value');
		}
	});
	$(".them3").on("click",function(){
		number3=number3+1;
		$(".number3").val(number3);
		$(".tru3").css("display","inline");
	});
	$(".tru3").on("click",function(){
		if(number3>0){
			number3=number3-1;
			$(".number3").val(number3);
		}else{
			$('.number3').removeAttr('value');
		}
	});
	$(".them4").on("click",function(){
		number4=number4+1;
		$(".number4").val(number4);
		$(".tru4").css("display","inline");
	});
	$(".tru4").on("click",function(){
		if(number4>0){
			number4=number4-1;
			$(".number4").val(number4);
			if (number4==0) {
				$('.number4').val("");
				$(".tru4").hide();
			}
		}else{
			$('.number4').removeAttr('value');
		}
	});
	$(".addd").on("click",function(){
		if(($(".form-check-input").is(":checked"))&&($(".number1").val()!=""||$(".number2").val()!=""||$(".number3").val()!=""||$(".number4").val()!="")){
			alert('Thêm vào thành công :V');
		}
	});
});