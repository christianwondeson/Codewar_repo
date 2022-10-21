const fsPromises = require("fs").promises;
const path = require("path");
const fs = require("fs");
const http = require("http");

const logEvents = require("./loginEvent");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}
//class will inherit from eventemitter modules

//initalize the object
const myEmitter = new Emitter();

// let us define a port inorder to host this website some where
myEmitter.on("log", (msg, fileName) => logEvents(msg, fileName));
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      contentType.includes("image") ? "" : "utf-8"
    );
    // thttps://themeforest.net/category/site-templates/retail/shoppinghe image of new page will dislay after changing the encoding to an empty string rather than utf-8
    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "Content-Type": contentType,
    });
    response.end(
      contentType === "application/json" ? JSON.tringify(data) : data
    );
  } catch (err) {
    console.log(err);
    // server error
    myEmitter.emit("log", `${err.name} : ${err.message}`, "errorLog.txt");
    response.statusCode = 500;
    response.end();
  }
};

// add listener for log event
// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   //emit event
//   myEmitter.emit("log", "log event emitted!");
// }, 2000);

// lets create a new server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  myEmitter.emit("log", `${req.url}\t${req.method}`, "reqLog.txt");
  const extension = path.extname(req.url);

  let contentType;

  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  //   if we didn't type the file extension on html this code will  concatnate it

  if (!extension && req.url.slice(-1) !== "/") {
    filePath += ".html";
  }

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
    // we gonna serve redirect(301) or a bad server (404)

    console.log(path.parse(filePath));
    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301, { Location: "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { Location: "/" });
        res.end();
        break;
      default:
        // serve a 404 response
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }
});

// listen to our request this will display the method and index page
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(`there is an error ${err}`);
  process.exit();
});
