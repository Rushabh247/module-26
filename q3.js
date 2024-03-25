function ageInDays(person) {
    // Concatenate the first name and last name into a single string
    var fullName = person.firstName + " " + person.lastName;

    // Calculate age in days
    var ageInDays = person.age * 365; // Assuming 365 days in a year

    // Define a callback function to log the message
    function logMessage() {
        console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    }

    // Return the callback function
    return logMessage;
}

// Example usage:
var person = {
    firstName: "Rushabh",
    lastName: "Gunjal",
    age: 30
};

var logAgeInDays = ageInDays(person);
logAgeInDays(); // Output: The person's full name is Rushabh Gunjal and their age in days is 10950.
