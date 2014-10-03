$(document).ready(function() {
	var totTask=0;
	var totCompleted=0;
	var totActive=0;
	$('#textBox').keyup(function(e){
		if(e.keyCode == 13){
			var enteredString = $('#textBox').val();
			var trimedString = $.trim(enteredString);
		
			if(trimedString !== "") {
				$('#taskKeeper').append('<div class="task"><div class="done"><input type="checkbox" name="test"'+ 
				'class ="chBx"></div><div class="taskText">' + trimedString + 
				'</div><div class = "del"><button class = "dlBx">X</button></div>');
				totTask=$(".chBx").length;
				totActive++;
				$("#itLeft").empty();
				$("#itLeft").append(totActive);
				$("#total").css( "visibility", "visible" );
			}
			$("#clear").empty();
			$("#clear").append(totCompleted);
			$("#textBox").val("");
		};
	});
	
	$("#mainCheck").change(function(){
		var a=this.checked;	
		
		if(a){
			$(".chBx").prop("checked", true);
			totCompleted=totTask;
			totActive=0;
			$("#itLeft").empty();
			$("#itLeft").append(totActive);
			$("#clear").empty();
			$("#clear").append(totCompleted);
			
			$(".chBx").parent().parent().find(".taskText").css( "text-decoration", "line-through" );
			$(".chBx").parent().parent().find(".taskText").css( "color", "grey" );
			
			
			} else {
			$(".chBx").prop("checked", false);
			totCompleted=0;
			totActive=totTask;
			$("#itLeft").empty();
			$("#itLeft").append(totActive);
			$("#clear").empty();
			$("#clear").append(totCompleted);
			$(".chBx").parent().parent().find(".taskText").css( "text-decoration", "none" );
			$(".chBx").parent().parent().find(".taskText").css( "color", "black" );
			
			
		};
	});
	
	
	$(document).on("change", ".chBx",function() {
			var check=this.checked;
			if(check){
			totActive--;
			totCompleted++;
			$("#itLeft").empty();
			$("#itLeft").append(totActive);
			$("#clear").empty();
			$("#clear").append(totCompleted);
				$(this).parent().parent().find(".taskText").css( "text-decoration", "line-through" );
				$(this).parent().parent().find(".taskText").css( "color", "grey" );
			} else {
				totActive++;
				totCompleted--;
				$("#itLeft").empty();
				$("#itLeft").append(totActive);
				$("#clear").empty();
				$("#clear").append(totCompleted);
				$(this).parent().parent().find(".taskText").css( "text-decoration", "none" );
				$(this).parent().parent().find(".taskText").css( "color", "black" );
		};
		
	});	
	
	$(document).on("click", ".dlBx",function() {
		 $(this).parent().parent().remove();
		 totTask=$(".chBx").length;
		 $("#itLeft").empty();
		 $("#itLeft").append(totActive);
		 if(totTask == 0){
			$("#total").css( "visibility", "hidden" );	
			}
		});
		
	
});