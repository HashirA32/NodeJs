// How to make a server

// let http = require("http");
// let fs = require('fs');

// let server = http.createServer(( request, responce) => {
//     console.log("You hit a request" + request.url);
//     responce.writeHead(200, {'content-type' : 'html'});
//     liveData.pipe(responce);
// });
// server.listen('3000', 'localhost', () => {
//     console.log('I am listning')
// });

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

// let readedFile = fs.readFileSync('MyInformation.txt', 'utf8');
// fs.writeFileSync('MyInformation.txt', `${readedFile} I am a web developer`)

// Creating and deleting the Directories

// fs.mkdirSync('carsDetails');
// fs.rmdir('carsDetails', () => {
//     console.log("directory removed")
// });

// Stream and buffers

// let liveData = fs.createReadStream(__dirname+ '/MyInformation.txt', 'utf8');
// let writeLiveData = fs.createWriteStream(__dirname + '/MyNewInformation')
// liveData.on('data', (Chunk) => {
//     console.log("The chunk hasbeen received!");
//     writeLiveData.write(Chunk);
// });

// pipes in Node

// let liveData = fs.createReadStream(__dirname+ '/index.html', 'utf8');
// let writeLiveData = fs.createWriteStream(__dirname + '/MyNewInformation');

// liveData.pipe(writeLiveData);

// Streaming Jason data

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "application/json" });

//   let MyObj = {
//     name: "Hashir Ali",
//     rollNo: 32,
//     class: "2nd year",
//     age: 19,
//   };

//   res.end(JSON.stringify(MyObj));
// });

// server.listen("3000", "localhost", () => {
//   console.log("I am lisning !");
// });

// Express JS

let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send('This is home page!');
});

app.get("/contact", (req, res) => {
  res.send('This is contact page!');
});

app.get("/about", (req, res) => {
  res.send('This is about page!');
});

app.get("/profile/:id", (req, res)=>{
  res.send("You hit a request to see profile with the ID : " + req.params.id)
})


app.listen(3000);
