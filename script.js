
$(".day").click(function() {
	$(this).toggleClass("border");
	$(this).find(".dash").toggleClass("length");
	$(this).find(".day1").toggleClass("opacity");
	$(this).find(".day2").toggleClass("opacity"); 
	$(this).find(".day3").toggleClass("opacity");
})