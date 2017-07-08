$('.stepBtn')
.click(function(e) {
	var n = $(this).index();
	$('#readMore')[0].dataset.step = n+1;
	$('.step_unit').each(function(idx, item){
		$(item).hide();
		if(idx==n){
			$(item).show();
		}
	});
});
$('.stepBtn')[0].click();