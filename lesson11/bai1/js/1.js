$(function(){
	$(".add").click(function(){
		if($(".search-text").val()==""){
			alert('Nội dung không được để trống');
		}else{
			var text=$(".search-text").val();
			$(".work").append(`<p><span class="check"><i class="fa fa-check"></i></span>
				<span class="text1">`+text+`</span>
				<span class="delete"><i class="fa fa-times"></i></span></p>`);
		}
	});
});
$(document).on("click",".delete", function(){
	$(this).parent().remove();
});
$(document).on("click", ".check",function(){
	$(".work").parent().css("text-decoration","overline");
});