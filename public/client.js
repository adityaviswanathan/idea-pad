function newField(event) {
	if(event.which == 13) {
		console.log('ENTER PRESSED');
		var input_field = '<li><input type="text" name="ip-form-data-source" onkeydown="return newField(event)"></li>';
		$(event.target).parent().after(input_field);
		$(event.target).parent().next().children('input').focus();
	}
	if(event.which == 8 && !($(event.target).val())) {
		console.log('BACKSPACE FIRED');
		$(event.target).parent().prev().children('input').focus();
		if($(event.target).parent().siblings().length) $(event.target).parent().remove();	
		event.preventDefault();
	}
}