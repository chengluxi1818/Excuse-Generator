$(document).ready(function() {
	$(".boss").hover(function() {
		// $(".bossPath").toggle(function() {
			$(".bossPath_1, .bossPath_2, .bossPath_3").each(function(fadeInDiv) {
				$(this).delay(fadeInDiv * 500).fadeIn(1000);
			});
		// });
	});

	$(".vp").mouseenter(function() {
		$(".vpPath").show();
		$(".vpPath").animate({
			// opacity: "toggle",
			left: "800px",
			right: "200px"
		});
	});
	$(".vp").mouseleave(function() {
		$(".vpPath").stop();
	});


	$(".director").hover(function() {
		var path = $(".directorPath");
		var offset = path.offset();
		var originRight = offset.right;

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(".animated")) {
				path.animate({
					right: "200px"
				});
			}
		}
		else {
			path.css('right', "98px");
			path.css('display', "none");
		}
	});

	$(".pm").hover(function() {
		$(".pmPath").toggle();
	});

	$(".comrade").hover(function() {
		$(".comradePath").toggle();
	});
});