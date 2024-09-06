$(document).ready(function(){
var nexto =0 ;

  $("#hide").click(function(){
  	$("#intro").hide();
	$(".shown").show("slow");
	
	$("#answer").click(function(){
		$("#answer1").slideDown("slow");
	});
  });
  $("#next").click(function(){
	  nexto = nexto + 1
	  
	  if(nexto == 1){
		$("#question").hide();
		$(".shown2").show("slow");
		
		$("#answer").click(function(){
			$("#answer2").slideDown("slow");
		});
	  }
	  if(nexto == 2){
		$("#question2").hide();
		$(".shown3").show("slow");
		
		$("#answer").click(function(){
			$("#answer3").slideDown("slow");
		});
	  }
	  if(nexto == 3){
		$("#question3").hide();
		$(".shown4").show("slow");
		$("#next").hide();
		
		$("#answer").click(function(){
			$("#answer4").slideDown("slow");
		});
	  }
  });
});
