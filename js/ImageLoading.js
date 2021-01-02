var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");

var trackPics = []
var picsToLoad = 0;

function beginLoadingImage(imgVar, filename) {
	imgVar.onload = countLoadedmagesAndLaunchReady;
	imgVar.src = "images/" + filename;
}

function countLoadedmagesAndLaunchReady() {
	picsToLoad--;
	if (picsToLoad == 0) {
		imageLoadingDoneSoStartGame()
	}
}

function loadImageForTrackCode(trackCode, filename) {
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], filename);			
}

function loadImages() {
	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: otherCarPic, theFile: "player2car.png"},
		{trackType: TRACK_ROAD, theFile: "track_road.png"},
		{trackType: TRACK_WALL, theFile: "track_wall.png"},
		{trackType: TRACK_GOAL, theFile: "track_goal.png"},
		{trackType: TRACK_TREE, theFile: "track_tree.png"},
		{trackType: TRACK_FLAG, theFile: "track_flag.png"}
	];

	picsToLoad = imageList.length;

	for (var i=0; i < imageList.length; i++) {
		if (imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);			
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}