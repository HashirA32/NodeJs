// How to make a server



let http = require('http');
let server = http.createServer(( request, responce) => {
    console.log("You hit a request" + request.url);
    responce.writeHead(200, {'content-type' : 'text/plain'});
    responce.end("Responce has been made.")
});
server.listen('3000', 'localhost', () => {
    console.log('I am listning')
});



// Accessing the Global objects


// console.log("hy Hashir")

// setTimeout(function(){
//     console.log("10seconda have passed.")
// }, 10000)

// let time = 0;
// let Timer = setInterval(function(){
//     time += 1;
//     console.log(time +"seconda have passed.")
//     if(time >= 5){
//         clearTimeout(Timer)
//     }
// }, 1000)
// console.log(__filename);


// Node Modules and module pattern


// let lenght = require('./hello');
// console.log(lenght.Greeting(['h', 'a', 's', 'h', 'h', 'i', 'i', 'r']));



// Reading and writing files.

let fs = require('fs');

// let readedFile = fs.readFileSync('MyInformation.txt', 'utf8');
// fs.writeFileSync('MyInformation.txt', `${readedFile} I am a web developer`)


// Creating and deleting the Directories


fs.mkdirSync('carsDetails');

fs.rmdir('carsDetails', () => {
    console.log("directory removed")
});