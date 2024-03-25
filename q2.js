function manipulateString(str) {
    // Convert the characters of the string to uppercase
    var manipulatedString = str.toUpperCase();

   
    function logString() {
        console.log("The manipulated string is:", manipulatedString);
    }


    return logString;
}


var logManipulatedString = manipulateString("hello world");
logManipulatedString(); // Output: The manipulated string is: HELLO WORLD
