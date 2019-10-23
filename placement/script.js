function countAllCharacters(str) {
    var letterCount = {};
    var currentCharacter = null;
    var i = 1;
    var pointer = 1;
    console.log('string is', str);

    if ((str == null) || (str == undefined) || (str == '')) {
        return letterCount;

    } else {
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
        return letterCount;
    


    }

    

}

output = countAllCharacters('');
console.log(output);

