// JavaScript Document
jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
}
jQuery.fn.originPos = function () {
	this.css("position","relative");
	this.css("top", "0");
	this.css("left","0");
	return this;
}
jQuery.fn.createOverlay = function () {
	$('body').append('<div class="overlayContainer"></div>');
	$('body').find('.overlayContainer').hide();	
	$(this).append('<a href="javascript:void(0);" class="closeButton">&nbsp;</a>');
}
jQuery.fn.zoomable = function () {
	$(this).createOverlay();
	$(this).find('.closeButton').hide();
	$(this).click(function(e){
		var target = $(e.target).attr('class');
		if($(this).hasClass('zoomStyle01') && target=='closeButton'){
			$('body').css('overflow','auto');
			$(this).originPos().removeClass('zoomStyle01').addClass('zoomStyle02');
			$(this).find('.closeButton').hide();			
			$('body').find('.overlayContainer').hide();	
			
		}else{
			$('body').css('overflow','hidden');
			$('body').find('.overlayContainer').show();	
			$(this).center().addClass('zoomStyle01').removeClass('zoomStyle02').find('.closeButton').show();
		}
		e.stopPropagation();
	});
}