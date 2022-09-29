const fs = require("fs");
const path = require("path");
// const { Z_ERRNO } = require("zlib");

console.log("async func are the best when it cames to multi tasking");

//this is an api for reading files and write
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
    //this datat will be buffered
    //console.log(data.toString());
    //   to convert the buffered data to a string
    // or we can use the encode characterizarion of utf-8 before the call back
  }
);

console.log("one example of async and await");

//let us know check the write api on node js documentation

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "our write function is working !",
  (err) => {
    if (err) throw err;
    //after the write process is completed then
    console.log("write operation is completed");
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "testing append",
      (err) => {
        if (err) throw err;
        console.log("appending completed");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newreply.txt"),
          (err) => {
            if (err) throw err;
            console.log("renaming is complete");
          }
        );
      }
    );
    // this code will update our file by appending if it ls or by creating if it doeasn't exist
    // call back hell
  }
);
//this block of code will create a new file called reply.txt on files dir this file will contain specified stri ngs then after writing we will notifiy our write operation is finished

fs.appendFile(
  path.join(__dirname, "files", " append.txt"),
  "using append modules on nodejs",
  (err) => {
    if (err) throw err;
    console.log("append file completed");
  }
);
//this method will create a new file called append.txt

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`there was an uncaught error : ${err}`);
  process.exit();
});
