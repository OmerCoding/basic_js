function pigLatin(word) {
	if (isVowel(word[0])) {
		word += 'ay';
	} else {
		let firstLetter = word[0];
		while (!isVowel(firstLetter)) {
			if (firstLetter === 'q') {
				word = quCase(word);
			} else {
				word += firstLetter;
				word = word.slice(1, word.length);
			}
			firstLetter = word[0];
		}
		word += 'ay';
	}
	return word;
}

function isVowel(char) {
	return (char === 'a' || char === 'e' || char === 'u'
			|| char === 'o' || char === 'i');
}

function quCase(word) {
	if (word.length > 1) {
		if (word[1] === 'u') {
			word += 'qu';
			word = word.slice(2, word.length);
		}
	}
	return word;
}

function translate(sentence) {
	let wordsArray = sentence.split(' ');
	let pigLatinWordsArr = [];
	let pigLatinSen = '';
	for (let i = 0; i < wordsArray.length; i++) {
		pigLatinWordsArr.push(pigLatin(wordsArray[i]));
	}
	return pigLatinWordsArr.join(" ");
}

module.exports = {
	translate
}
