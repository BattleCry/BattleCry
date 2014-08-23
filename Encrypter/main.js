$(function() {
	var str = 'hello awdluahw';
	//Starships were meant to flyHands up, and touch the skyCan\'t stop, \'cause we\'re so highLet\'s do this one more timeStarships were meant to flyHands up, and touch the skyLet\'s do this one last timeCan\'t Stop...We\'re higher than a motherfucker
	encode(str, 'adowyfuityckvlabhawdlgbkauvcjywdukygiluhaowglidyfukctakgvwigdluaiyvwugdbawougdiyvguahbjlwhdilugiavegjkhbfhsaawkueygfawejvhafwkjyfhagsefefuhaefaefwoydgiyfavhlbwhdogiyfaukvhwbldhogaiywvldbawdad');
});
var alphabet = [{ id: 1, letter: 'a' },{ id: 2, letter: 'b' },{ id: 3, letter: 'c' },{ id: 4, letter: 'd' },{ id: 5, letter: 'e' },{ id: 6, letter: 'f' },{ id: 7, letter: 'g' },{ id: 8, letter: 'h' },{ id: 9, letter: 'i' },{ id: 10, letter: 'j' },{ id: 11, letter: 'k' },{ id: 12, letter: 'l' },{ id: 13, letter: 'm' },{ id: 14, letter: 'n' },{ id: 15, letter: 'o' },{ id: 16, letter: 'p' },{ id: 17, letter: 'q' },{ id: 18, letter: 'r' },{ id: 19, letter: 's' },{ id: 20, letter: 't' },{ id: 21, letter: 'u' },{ id: 22, letter: 'v' },{ id: 23, letter: 'w' },{ id: 24, letter: 'x' },{ id: 25, letter: 'y' },{ id: 26, letter: 'z' },{ id: 27, letter: ' ' },{ id: 28, letter: '.' },];
function encode(word, key) {
	console.log(word);
	var switcharound = '';
	for (i = word.length; i > 0; i--) {
		switcharound += word.substring(i-1, i);
	}
	console.log(switcharound);
	if (word.length % 2 == 0) {
		word += ' ';
	}
	var switcharound2 = '';
	for (i = 0; i < switcharound.length; i++) {
		if (i % 2 == 0) {
			var a = switcharound.substring(i-1, i);
			var b = switcharound.substring(i-2, i-1);
			switcharound2 += a + b;
		}
	}
	var currentUsed = 1;
	var switcharound3 = '';
	for (i = 1; i < switcharound2.length; i++) {
		var currentKey = key.substring(currentUsed-1,currentUsed);
		console.log(key.substring(currentUsed-1,currentUsed));
		currentUsed++;
		if (currentUsed == key.length+1) { currentUsed = 1; }
		var currentKeyId = 0;
		for (j = 0; j < alphabet.length; j++) {
			if (alphabet[j].letter == key.substring(i-1, i)) {
				currentKeyId = alphabet[j].id;
			}
		}

		// find the id of the letter in the text
		var curLetterId = 0;
		var curLetter = '';
		for (j = 0; j < alphabet.length; j++) {
			if (alphabet[j].letter == switcharound2.substring(i-1, i)) {
				curLetterId = alphabet[j].id;
				curLetter = alphabet[j].letter;
			}
		}
		var newVal = currentKeyId+curLetterId;
		if (newVal > 26) {
			newVal -= 26;
		}
		switcharound3 += alphabet[newVal].letter;
	}

	var preResult = '';
	for (i = 0; i < switcharound3.length; i=i+3) {
		preResult += switcharound3.substring(i-3, i) + '&nbsp; &nbsp;';
	}
	var preResult2 = '';
	for (i = 0; i < preResult.length; i=i+96) {
		preResult2 += preResult.substring(i-96, i) + '<br>';//13
	}
	$('#body').html(preResult2);

}