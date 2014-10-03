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
		}
	});
	
	$("#mainCheck").change(function(){
		var a=this.checked;	
		if(a){
			$(".chBx").prop("checked", true);
			} else {
			$(".chBx").prop("checked", false);
		};
	});
	
	$(document).on("click", "button",function() {
		 $(this).parent().parent().remove();
		});
	
});