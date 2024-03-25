function doubleWithCallback(arr, callback) {
  
    var doubledArray = [];

    
    for (let i = 0; i < arr.length; i++) {
       
        doubledArray.push(callback(arr[i]));
    }

ments
    return doubledArray;
}


function double(num) {
    return num * 2;
}


var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = doubleWithCallback(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
