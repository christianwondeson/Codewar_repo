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

const PORT = process.env.PORT || 3500;

// add listener for log event
// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   //emit event
//   myEmitter.emit("log", "log event emitted!");
// }, 2000);
