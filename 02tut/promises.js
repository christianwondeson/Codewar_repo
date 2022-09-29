//inorder to void callback hell we are using promises

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  //this function will do the task while performing other low priority tasks
  try {
    await fsPromises.writeFile(
      path(__dirname, "files", "new_one.txt"),
      "the newly written file"
    );

    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    await fsPromises.writeFile(
      path.join(__dirname, "files", "otherpromises.txt"),
      "i am writing on a newly create txt file !!"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "otherpromises.txt"),
      "\n\n i am trying to append a new line on the same file by using fspromises and async func"
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "append.tx"),
      "wooow"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "otherpromises.txt"),
      path.join(__dirname, "files", "promisesrenamed.txt")
    );
    console.log(data);

    const deletedData = await fsPromises.writeFile(
      path.join(__dirname, "files", "willDelete.txt"),
      "i am going to delete this file"
    );
    await fsPromises.unlink(path.join(__dirname, "files", "willDelete.txt"));
  } catch (err) {
    console.error(err);
  }
};

//the above function works asynchroneously it awaits for the file then read the file on the starter.txt
// we have to specificy the decoding convention to change the buffered data into string

fileOps();

//we have to call our function
