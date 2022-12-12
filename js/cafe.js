$(document).ready(function(){
	
	//첫화면 메인 썸네일이미지 클릭하면 큰이미지 교체되기.
	$("#thumb img").click(function(){
		//alert('ddd');
		const imgSrc = $(this).attr("src");
		console.log(imgSrc);
		$("#big").attr("src",imgSrc);
	});
	
});//////all end