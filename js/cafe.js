$(document).ready(function(){
	
	//첫화면 메인 썸네일이미지 클릭하면 큰이미지 교체되기.
	$("#thumb img").click(function(){
		//alert('ddd');
		const imgSrc = $(this).attr("src");
		console.log(imgSrc);
		$("#big").attr("src",imgSrc);
	});
	
	//메뉴 버튼 클릭하면 색 바뀌기.
   // $("#menu h3").click(function(){
	//});	
	
	//스크롤
	 /*$("#menu a").click(function(){
		 $(this).addClass(
		 "act"		 
	 });*/
	 $("#interior #menu h3").eq(0).children().addClass('act');
	 $("#menus #menu h3").eq(1).children().addClass('act');
	 $("#intros #menu h3").eq(2).children().addClass('act');
	 $("#maps #menu h3").eq(3).children().addClass('act');
	
});//////all end