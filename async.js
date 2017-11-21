const request = require('request');

const test = () => {
    const requestResponse = (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }
    request('http://www.google.com', requestResponse);
}
//START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");
