$(document).ready(function() {
	$('#oval-nav').height($('#oval-nav').width());
	$('#group-1').height($('#oval-4').width() + Number($('#oval-4').css('top').slice(0,-2)));
	$('#oval-4').height($('#oval-4').width());
	$('#oval-g3-mini').height($('#oval-g3-mini').width());
	$('#group-3').height($('#oval-g3-company').height() + Number($('#oval-g3-company').css('top').slice(0,-2)));
	$('#row-g4-1').height($('#oval-g4-1').height() + Number($('#oval-g4-1').css('top').slice(0,-2)));
	$('#group-1').css('margin-top',$('#menu').outerHeight() + 'px');

	$(window).resize(function(){
	    $('#oval-nav').height($('#oval-nav').width());
		$('#group-1').height($('#oval-4').width() + Number($('#oval-4').css('top').slice(0,-2)));
		$('#oval-4').height($('#oval-4').width());
		$('#oval-g3-mini').height($('#oval-g3-mini').width());
		$('#group-3').height($('#oval-g3-company').height() + Number($('#oval-g3-company').css('top').slice(0,-2)));
		$('#row-g4-1').height($('#oval-g4-1').height() + Number($('#oval-g4-1').css('top').slice(0,-2)));
		$('#group-1').css('margin-top',$('#menu').outerHeight() + 'px');
	})
});