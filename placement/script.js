// Complete a function called countAllCharacters. Given a string, your function returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:

// If given an empty string, countAllCharacters should return an empty object.
// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
    //get string length
    //var stringLength = str.length;
    
    //create variable to hold string as we whittle it down
    //var currentString = str;
    
    //create array to hold letters and their count
    var letterCount = {};
    
    //Use loop to remove each letter and store count in array created above.

    var pointer = 1;

    while (str.length - pointer > 0) {
        //get character of str at pointer
        //start at the end of the word
        //TODO explain why start at the end
        
       pointer = str.length - pointer;
       var currentCharacter = str.charAt(pointer);

        // //check char to see if it is a key in array already

        // if (letterCount.indexOf(currentLetter = -1)) {
        //      //put character into tracking object 'letterCount' and add 1 to count.
        //     letterCount[currentCharacter] = 1;
        //     console.log(letterCount);

        // } else {
        //     //increment count of letter +1
        //     //get current letter value
        //     //letterCount.m = letterCount.m +1;


            letterCount[currentCharacter] = letterCount[currentCharacter] +1;

        }
       
        pointer --;

    }
    



countAllCharacters('Tammy');