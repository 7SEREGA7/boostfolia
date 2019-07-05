let videoPlayer = document.getElementById('videoPlayer');
let videoPlayerBtn = document.getElementById('video-btn');




videoPlayerBtn.addEventListener('click', function () {
	if (videoPlayer.paused == false) {
		videoPlayer.pause();
		videoPlayer.firstChild.nodeValue = 'Play';
	} else {
		videoPlayer.play();
		videoPlayer.firstChild.nodeValue = 'Pause';
	}
});