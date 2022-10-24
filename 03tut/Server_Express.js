const { timeStamp } = require("console");
const { TIMEOUT } = require("dns");
const express = require("express");
const app = express();
const path = require("path");
const { nextTick } = require("process");
const PORT = process.env.PORT || 3500;

// express js check the rooting of the page automatically for example inorder to check for the index page we must consider the / or /index.html condition to disply the the same result ^ represent the beginning and $ the end is a slash or index.html respond the index.html
// in order to only req the index with out the content type we use (.html)? for that purpose

// express handle the root in water fall fashion

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
  //   another way of sending response is
  //   res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

// to handle the redirect on express web status 301
// send 302 by default so we have to specifiy the web status

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

// if we if the custome 404.html file using sendfile method the server will resturn a 200 web status so we have to specifiy the web status

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// let try to chain route handler
app.get(
  "/home(.html)?",
  (req, res, next) => {
    console.log("attempting to handle the route");
    next();
  },
  (req, res) => {
    res.send("home page loaded");
  }
);

//   another example

const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three and finished");
  res.send("finished");
};

app.get("/chain(.html)?", [one, two, three]);

app.listen(PORT, () => console.log(`server running ${PORT}`));


// route handlers are the same us middlewares