// Function to sort titles alphabetically and log them to console
function logTitlesAlphabetically(titles) {
    titles.sort(); 
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

function extractAndLogTitles(books, callback) {
   
    
    callback(titles);
}

var books = [
    { title: "Book C", author: "Author C", year: 2010 },
    { title: "Book A", author: "Author A", year: 2008 },
    { title: "Book B", author: "Author B", year: 2015 }
];


extractAndLogTitles(books, logTitlesAlphabetically);
