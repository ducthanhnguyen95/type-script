function processEvents():never{
    while(true) {
        // Read a message from queue
    }
}

function reject(message:string):never{
    throw new Error(message);
}

processEvents();
console.log('Hello World')