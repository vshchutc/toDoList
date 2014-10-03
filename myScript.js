$(document).ready(function() {
	
	$('#textBox').keyup(function(e){
		if(e.keyCode == 13){
			var enteredString = $('#textBox').val();
			var trimedString = $.trim(enteredString);
		
			if(trimedString !== "") {
				$('#taskKeeper').append('<div class="task"><div class="done"><input type="checkbox" name="test"'+ 
				'class ="chBx"></div><div class="taskText">' + trimedString + 
				'</div><div class = "del"><button class = "dlBx">X</button></div>');
			}
			
			$("#textBox").val("");
		};
	});
	
	$("#mainCheck").change(function(){
		var a=this.checked;	
		
		if(a){
			$(".chBx").prop("checked", true);
			$(".chBx").parent().parent().find(".taskText").css( "text-decoration", "line-through" );
			$(".chBx").parent().parent().find(".taskText").css( "color", "grey" );
			} else {
			$(".chBx").prop("checked", false);
			$(".chBx").parent().parent().find(".taskText").css( "text-decoration", "none" );
			$(".chBx").parent().parent().find(".taskText").css( "color", "black" );
			
		};
	});
	
	
	$(document).on("change", ".chBx",function() {
			var check=this.checked;
			if(check){
				$(this).parent().parent().find(".taskText").css( "text-decoration", "line-through" );
				$(this).parent().parent().find(".taskText").css( "color", "grey" );
			} else {
				$(this).parent().parent().find(".taskText").css( "text-decoration", "none" );
				$(this).parent().parent().find(".taskText").css( "color", "black" );
		};
	});	
	
	$(document).on("click", "button",function() {
		 $(this).parent().parent().remove();
		});
	
});