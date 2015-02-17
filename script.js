/**
 * @author Marc
 */



var botPermisPos1 = $("#menubotPermis").height() - 30; 
botPermisPos1 += "px";
botPermisPos1 = "-" + botPermisPos1
$("#menubotPermis").css("bottom", botPermisPos1);
$("#menubotPermis").hover(function(){
	$("#menubotPermis").stop();
		$("#menubotPermis").animate({ 
        	bottom: "-2px",
      	}, 500)
    
}, function(){
	$("#menubotPermis").stop(); 
	$("#menubotPermis").animate({ 
        bottom: botPermisPos1,
      }, 500 )
});


var botPermisPos2 = $("#menubotSkinautique").height() - 30; 
botPermisPos2 += "px";
botPermisPos2 = "-" + botPermisPos2
$("#menubotSkinautique").css("bottom", botPermisPos2);
$("#menubotSkinautique").hover(function(){
	$("#menubotSkinautique").stop(); 
	$("#menubotSkinautique").animate({ 
        bottom: "-2px",
    }, 500 )
}, function(){
	$("#menubotSkinautique").stop(); 
	$("#menubotSkinautique").animate({ 
        bottom: botPermisPos2,
      }, 500 )
});

var botPermisPos3 = $("#menubotVoile").height() - 30; 
botPermisPos3 += "px";
botPermisPos3 = "-" + botPermisPos3
$("#menubotVoile").css("bottom", botPermisPos3);
$("#menubotVoile").hover(function(){
	$("#menubotVoile").stop();
	$("#menubotVoile").animate({ 
        bottom: "-2px",
    }, 500 )
}, function(){
	$("#menubotVoile").stop();
	$("#menubotVoile").animate({ 
        bottom: botPermisPos3,
      }, 500 )
});

var botPermisPos4 = $("#menubotWake").height() - 30; 
botPermisPos4 += "px";
botPermisPos4 = "-" + botPermisPos4
$("#menubotWake").css("bottom", botPermisPos4);
$("#menubotWake").hover(function(){
	$("#menubotWake").stop(); 
	$("#menubotWake").animate({ 
       	bottom: "-2px",
   	}, 500 )
     
}, function(){
	$("#menubotWake").stop(); 
	$("#menubotWake").animate({ 
        bottom: botPermisPos4,
      }, 500 )
});


var positionM = ($("body").width() - 845)/2;
$("#menubot").css("left", positionM + "px");

$(window).resize(function(){
	var positionM = ($("body").width() - 845)/2;
	$("#menubot").css("left", positionM + "px");
	var positionSlider = ($("#corps").width()- ($(".slides_container").width() + $("#textAccueil").width()))/2;
	$(".slides_container").css("left", positionSlider + "px");
	$("#textAccueil").css("left", positionSlider + "px");
});

var positionSlider = ($("#corps").width()- ($(".slides_container").width() + $("#textAccueil").width()))/2;
$(".slides_container").css("left", positionSlider + "px");
$("#textAccueil").css("left", positionSlider + "px");

$(function(){
	$("#imageAccueil").slides({
		play: 5000,
		generatePagination: false
	});
});


$("#Affiche").click(
	function(){
		$("#Affiche").animate({
			width : "771px", 
		}, 500);
	}
);

$("#Affiche").hover(
	function(){
	},
	function(){
		$("#Affiche").animate({
			width : "33%" 	
		}, 500);
	}
);

$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});