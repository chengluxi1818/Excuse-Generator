$(document).ready(function() {
	$(".Pyramid").fadeIn();

	$(".boss").hover(function() {
		var path = $(".bossPath");

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(".animated")) {
				path.animate({
					left: "80px"
				});
			}
		}
		else {
			path.css('left', "50px");
			path.css('display', "none");
		}
	});

	$(".vp").hover(function() {
		var path = $(".vpPath");

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(".animated")) {
				path.animate({
					right: "105px"
				});
			}
		}
		else {
			path.css('right', "28px");
			path.css('display', "none");
		}
	});

	$(".director").hover(function() {
		var path = $(".directorPath");

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(":animated")) {
				path.animate({
					right: "170px"
				});
			}
		}
		else {
			path.css('right', "96px");
			path.css('display', "none");
		}
	});

	$(".pm").hover(function() {
		var path = $(".pmPath");

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(".animated")) {
				path.animate({
					left: "250px"
				});
			}
		}
		else {
			path.css('left', "180px");
			path.css('display', "none");
		}
	});

	$(".comrade").hover(function() {
		var path = $(".comradePath");

		if(path.css("display") == "none") {
			path.css("display", "block");
			if(!path.is(".animated")) {
				path.animate({
					left: "335px"
				});
			}
		}
		else {
			path.css('left', "278px");
			path.css('display', "none");
		}
	});
});