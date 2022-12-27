const posts = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `${post.title}\n`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "post three", body: "This is post three" }, getPost);

// in the above code we can't see the last post because the create post too longer than the get post . so let us use the callback function

// let look promises

const premireLeague = [
  { club: "ARSENAL", rank: "1" },
  { club: "MAN-CITY", rank: "2" },
  { club: "MAN-UTD", rank: "3" },
];

function createRank(ranks) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      premireLeague.push(ranks);

      let error = true;

      if (!error) {
        resolve("there is no error");
      } else {
        reject("Error:sth went wrong!");
      }
    }, 2500);
  });
}

function getRank() {
  setTimeout(() => {
    let list = "";
    premireLeague.forEach((ranks) => {
      list += `${ranks.club} ${ranks.rank}\n`;
    });
    console.log(list);
  }, 1000);
}

createRank({ club: "CHELSEA", rank: "4" })
  .then(getRank)
  .catch((err) => console.log(err));
