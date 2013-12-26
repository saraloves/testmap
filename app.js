var myPlayer = videojs('example_video_1');

videojs('example_video_1').ready(function(){
	var myPlayer = this;
	console.log();
	myPlayer.play();

	$('.dislike-button').on('click', function(){

		console.log(myPlayer.currentTime());
		console.log(myPlayer);
	})
	$('.like-button').on('click', function(){

		console.log(myPlayer.currentTime());
	})
});