
function countAllCharacters(str) {    
    var letterCount = {};
    var currentCharacter = null;
    var i = 1;
    var pointer = 1;

    while (pointer > 0) {
        pointer = str.length -i;
        currentCharacter = str.charAt(pointer);
        
        if (!(currentCharacter in letterCount)) {
            letterCount[currentCharacter] = 1;

        } else {
            letterCount[currentCharacter] = letterCount[currentCharacter] +1;
        }

        i++;
        
    }
    console.log(letterCount);

}

countAllCharacters('banana');