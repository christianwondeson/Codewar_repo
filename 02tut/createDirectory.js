  const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("dir is removed");
  });
}

process.on("uncaughtException", (err) => {
  console.log(`some error were incountered : ${err}`);
  process.exit();
});
