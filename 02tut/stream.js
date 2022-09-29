const fs = require("fs");
//we are importing fs module from nodes js
const readStream = fs.createReadStream("./files/lorem.txt", {
  encoding: "utf8",
});
//we are creating a readstream

const writeStream = fs.createWriteStream("./files/new_lorem.txt");

// readStream.on('data', (datachunk)=>{
// writeStream.write(datachunk);
// })

// this code well write the datachunk that is found on the readstream of lorem.txt file to our new_lorem.txt


// other efficent way is to use pipe
readStream.pipe(writeStream);