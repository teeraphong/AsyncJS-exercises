const fs = require('fs');

const readFromFile = (fileName) => {
    const content = fs.readFileSync(fileName, "utf-8");
    return content;
};

const readFromFile2 = (fileName, callback) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            callback('error');
        }
        else {
            callback(data);
        }
    });
};

const responseReadFile = (content) => {
    console.log(content);
    console.log('END')
};

console.log('START');
// const data = readFromFile('./sample.txt');
// console.log(data);
readFromFile2('./sample.txt', responseReadFile); // start file reading

