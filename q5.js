function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
        if (typeof name !== 'string' || name.trim() === '') {
            reject("Please provide a valid name.");
        } else {
            resolve("Hello, " + name + "!");
        }
    });
}


const name = "Mithun";


greetWithPromise(name)
    .then(message => {
        console.log(message); // Output: Hello, Mithun!
    })
    .catch(error => {
        console.error(error);
    });
