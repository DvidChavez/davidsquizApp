

$(document).ready(function(){
var nexto =0 ;

  $("#hide").click(function(){
    $("#intro").hide();
	$(".shown").toggle();
  });
  $("#next").click(function(){
	  nexto = nexto + 1
	  
	  if(nexto == 1){
		$("#question").hide();
		$(".shown2").toggle();
	  }
	  if(nexto == 2){
		$("#question2").hide();
		$(".shown3").toggle();
	  }
	  if(nexto == 3){
		$("#question3").hide();
		$(".shown4").toggle();
		$(".shown").toggle();
	  }
  });
});