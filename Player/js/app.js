isPlaying = false;

$("#play-btn").on("click", function() {
	if (isPlaying) {
		$("#player")[0].pause();
	} else {
		$("#player")[0].play();
	}
});

$("#player")[0].onplaying = function() {
	$("#play-btn").removeClass("icon-play")
		.addClass("icon-pause");
	isPlaying = true;
}

$("#player")[0].onpause = function() {
	$("#play-btn").removeClass("icon-pause")
		.addClass("icon-play");
	isPlaying = false;
}
