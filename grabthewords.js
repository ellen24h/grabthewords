var originalText = "These past few months especially have reminded me that I have the most amazing friends anyone could ever ask for. Those of you in Korea, you know who you are, thank you! I wouldn't have survived these past 7 years without you. You have poured onto me an abundance of love, patience, and understanding. You made Korea a home for me, and I am eternally grateful to you. You all have a special place in my heart. This is not goodbye- just see you later."
var net = [];
var allWords = [];
var theVeryWords = [];

var grabbing = function(originalText) {
	allWords = originalText.trim().split(" ");
	console.log(allWords);
}

var neting = function(allWords) {
	net = ["especially", "amazing", "thank", "Korea", "love", "patience", "understanding", "grateful", "special", "home", "happy"]
	for (var i = 0 ; i < net.length ; i++) {
		for (var j = 0 ; j < allWords.length ; j++) {
			if (net[i] === allWords[j]) {
				theVeryWords.push(allWords[j]);
			}
		}
	}
	console.log(theVeryWords)
}

grabbing(originalText);
neting(allWords);