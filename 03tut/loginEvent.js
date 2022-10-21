const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
//import uuid as a v4

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\t\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromise.appendFile(path.join(__dirname, "logs", logName), logItem);
    // await fsPromise.unlink(path.join(__dirname, "logs", logName));
    // await fsPromise.appendFile(
    //   path.join(__dirname, "logs", "eventing.txt"),
    //   logItem
    // );
  } catch (err) {
    console.error(err);
  }
};

process.on("uncaughtException", (err) => {
  console.error(`there are some errors ${err}`);
  process.exit();
});

module.exports = logEvents;
