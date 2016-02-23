$(document).ready(function() {
	var leftHidden_1 = $(".leftHiddenWord1");
	var leftHidden_2 = $(".leftHiddenWord2");
	var rightHidden_1 = $(".rightHiddenWord1");
	var rightHidden_2 = $(".rightHiddenWord2");
	var rightHidden_3 = $(".rightHiddenWord3");

	var fadeInDuration = 300;

	$(".boss").hover(function() {
		if($(".bossPath").css('display') == "block") {
			rightHidden_1.fadeIn(fadeInDuration);
		}
		else
			rightHidden_1.css('display', 'none');
	});

	$(".vp").hover(function() {
		if($(".vpPath").css('display') == "block") {
			leftHidden_1.fadeIn(fadeInDuration);
		}
		else
			leftHidden_1.css('display', 'none');
	});

	$(".director").hover(function() {
		if($(".directorPath").css('display') == "block") {
			leftHidden_2.fadeIn(fadeInDuration);
		}
		else
			leftHidden_2.css('display', 'none');
	});

	$(".pm").hover(function() {
		if($(".pmPath").css('display') == "block") {
			rightHidden_2.fadeIn(fadeInDuration);
		}
		else
			rightHidden_2.css('display', 'none');
	});

	$(".comrade").hover(function() {
		if($(".comradePath").css('display') == "block") {
			rightHidden_3.fadeIn(fadeInDuration);
		}
		else
			rightHidden_3.css('display', 'none');
	});

});