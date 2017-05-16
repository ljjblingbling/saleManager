//左侧菜单栏点击事件
$(function(){
	$('body').on('click','.navSame',function(){
		$(this).parent('li').toggleClass('layui-nav-itemed');
		$(this).parent('li').siblings('li').removeClass('layui-nav-itemed');
		var dd=$(this).next('dl').find('dd');
		if(dd.hasClass('layui-this')){
			dd.removeClass('layui-this');
		}
	})
	$('body').on('click','.layui-nav-child dd',function(){
		$(this).addClass('layui-this').siblings('dd').removeClass('layui-this')
	});
})