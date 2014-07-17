function newField(event) {
	if(event.which == 13) {
		var input_field = '<li><input type="text" name="ip-form-data-source" onkeydown="return newField(event)"></li>';
		$(event.target).parent().after(input_field);
		$(event.target).parent().next().children('input').focus();
	}
	if(event.which == 8 && !($(event.target).val())) {
		$(event.target).parent().prev().children('input').focus();
		if($(event.target).parent().siblings().length) $(event.target).parent().remove();	
		event.preventDefault();
	}
}

$("input[name='ip-form-stream']").on('click', function() {
	var value = $(this).attr('class');
    switch(value) {
    	case 'ip-form-stream-unit':
    		$(this).siblings('.ip-form-stream-display').html('sell each at&nbsp<input type="number" name="ip-form-stream-unit-price">');
    		break;
    	case 'ip-form-stream-subs':
    		$(this).siblings('.ip-form-stream-display').html('users will pay&nbsp<input type="number" name="ip-form-stream-subs-price">&nbspevery&nbsp<select><option value="day">day</option><option value="week">week</option><option value="month">month</option><option value="year">year</option></select>');
    		break;
    	case 'ip-form-stream-comm':
    		$(this).siblings('.ip-form-stream-display').html('for each&nbsp<input type="text" class="ip-form-stream-comm-action">, we will earn&nbsp<input type="number" class="ip-form-stream-comm-price">');
    		break;
    	case 'ip-form-stream-ads':
    		$(this).siblings('.ip-form-stream-display').html('there is a definite audience of&nbsp<input type="text" class="ip-form-stream-ads-num">&nbspearly users');
    		break;
    	case 'ip-form-stream-other':
    		$(this).siblings('.ip-form-stream-display').html('one sentence on how it\'ll make money:&nbsp<input type="text" class="ip-form-stream-other-sentence">');	
    }    
});

$('.ip-new-project-active').css('opacity', '1');

$('.ip-new-project-panel-controller .ip-new-project-panel-direction').on('click', function() {
	var curr_active = $('.ip-new-project-active');
	if($(this).hasClass('ip-new-project-panel-prev')) { //go previous	
		if(curr_active.prev().length > 0) {
			curr_active.css('opacity', '0');
			setTimeout(function() {
				curr_active.removeClass('ip-new-project-active');
				curr_active.prev().addClass('ip-new-project-active');
				curr_active.prev().css('opacity', '1');
			}, 500);		
			
		}
	} else { //go next				
		if(curr_active.next().length > 0) {
			curr_active.css('opacity', '0');
			setTimeout(function() {
				curr_active.removeClass('ip-new-project-active');
				curr_active.next().addClass('ip-new-project-active');
				curr_active.next().css('opacity', '1');
			}, 500);
			
		}
	}
});