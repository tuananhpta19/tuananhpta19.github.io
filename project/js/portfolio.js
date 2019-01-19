
$(function () {
    function activeTab(obj)
    {
    // Xóa class active tất cả các tab
    $('.tab-wrapper ul li').removeClass('active');
    // Thêm class active vòa tab đang click
    $(obj).addClass('active');
    // Lấy href của tab để show content tương ứng
    var id = $(obj).find('a').attr('href');
    // Ẩn hết nội dung các tab đang hiển thị
    $('.tab-item').hide();
    // Hiển thị nội dung của tab hiện tại
    $(id) .show();
}
$('.tab li').click(function(){
    activeTab(this);
    return false;
});
activeTab($('.tab li:first-child'));
})