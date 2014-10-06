$(document).ready(function() {
	var totalTask=0;
	var totalCompletedTasks=0;
	var totalActiveTask=0;
	$('#mainCheck').prop('checked', false);
	
	function totalTaskNullHideBar(){
		if(totalTask != 0){
			$("#total").show("slow");
		}else{$("#total").hide("slow");}
	};
	
	totalTaskNullHideBar();
	
	$('#textBox').keyup(function(e){
		if(e.keyCode == 13){
			var enteredString = $('#textBox').val();
			var trimedString = $.trim(enteredString);
			if(trimedString !== "") {
				$('#taskKeeper').append('<div class="task"><div class="done"><input type="checkbox" name="test"'+ 
				'class ="chBx"></div><div class="taskText">' + trimedString + 
				'</div><div class = "del"><button class = "dlBx">X</button></div>');
				totalTask=$(".chBx").length;
				totalActiveTask++;
				$("#itLeft").html(totalActiveTask);
				totalTaskNullHideBar();
			}
			$("#clear").html(totalCompletedTasks);
			$("#textBox").val("");
		};
	});
	
	$("#mainCheck").change(function(){
		var testChecked=this.checked;	
		if(testChecked){
			$(".chBx").prop("checked", true);
			totalCompletedTasks=totalTask;
			totalActiveTask=0;
			$("#itLeft").html(totalActiveTask);
			$("#clear").html(totalCompletedTasks);
			$(".chBx").parents(".task").find(".taskText").addClass( "checkedTask" );
		} else {
			$(".chBx").prop("checked", false);
			totalCompletedTasks=0;
			totalActiveTask=totalTask;
			$("#itLeft").html(totalActiveTask);
			$("#clear").html(totalCompletedTasks);
			$('.chBx').parents(".task").find(".taskText").removeClass( "checkedTask" );
		};
	});
	
	$(document).on("change", ".chBx",function() {
		var isChecked=this.checked;
		if(isChecked){
		totalActiveTask--;
		totalCompletedTasks++;
		$("#itLeft").html(totalActiveTask);
		$("#clear").html(totalCompletedTasks);
		$(this).parents(".task").find(".taskText").addClass( "checkedTask" );
		} else {
			$('#mainCheck').prop('checked', false);
			totalActiveTask++;
			totalCompletedTasks--;
			$("#itLeft").html(totalActiveTask);
			$("#clear").html(totalCompletedTasks);
			$(this).parents(".task").find(".taskText").removeClass( "checkedTask" );
		};
	});	
	
	$(document).on("click", ".dlBx",function() {
		$(this).parent().parent().remove();
		totalTask=$(".chBx").length;
		totalCompletedTasks=$(".chBx:checked").length;
		$("#clear").html(totalCompletedTasks);
		$("#itLeft").html(totalActiveTask);
		totalTaskNullHideBar()
	});
	
	$(document).on("click", "#all",function() {
		$('#active,#completed').css("font-weight", "normal");
		$('#all').css("font-weight", "bold");
		$(".chBx").parents(".task").show();
		});
		
	$(document).on("click", "#active",function() {
		$('#all,#completed').css("font-weight", "normal");
		$('#active').css("font-weight", "bold");
		$(".chBx:not('checked')").parents('.task').show();
		$(".chBx:checked").parents('.task').hide();
	});
		
	$(document).on("click", "#completed",function() {
		//$(document).change(".chBx", function(){
			$('#all,#active').css("font-weight", "normal");
			$('#completed').css("font-weight", "bold");
			$(".chBx:not('checked')").parents('.task').hide();
			$(".chBx:checked").parents('.task').show();
		//});
	});
	
	$(document).on("click", "#clearButton",function() {
		$(".chBx:checked").parents(".task").remove();
		var allCompleted=$(".chBx:checked").length;
		totalTask-=totalCompletedTasks;
		totalCompletedTasks=0;
		totalTaskNullHideBar();
		if(totalTask == 0){
			$('#mainCheck').prop('checked', false);			
		};
		$("#clear").append(totalCompletedTasks);
	});
});