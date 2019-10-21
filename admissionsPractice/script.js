//admissions challenge

var myArray = [];
myArray.push('Tammy L Treit', 'ttreit');
// console.log(myArray);

function cutName(array1) {
    var cutName = array1[0];
    var output = cutName.split(" ");
    // console.log(output);
    return output;    
}

//main

var fullName = cutName(myArray);
//create empty myInfo object

var myInfo = new Object();

//add three key:value pairs to myInfo
myInfo.fullName = fullName;
myInfo.skype = myArray[1];
myInfo.github = 'ttreit';


console.log(myInfo);