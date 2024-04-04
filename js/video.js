var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime = video.currentTime + 10;
	console.log("Video current time is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {

	// if video is already muted, unmute it
	if (video.muted) {
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = 'Mute';
		video.muted = false;
	} else {
		console.log("Mute");
		document.querySelector("#mute").innerHTML = 'Unmute';
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("The current value is ", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Oldschool");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Oldschool");
	video.classList.remove("oldSchool");
});