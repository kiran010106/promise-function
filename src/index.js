// Promise function
let promise = new Promise(function (resolve, reject) {
  // alert("Hello");
  resolve(56);
});

console.log("Hello One");
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is " + "Hello Three");
console.log(promise);

// Promise .then() and .catch()
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am a promise and I am resolved")
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am a promise and I am rejected")
    reject(new Error("I am an error"));
  }, 5000);
});

// To get the value
p1.then((value) => {
  console.log(value);
});

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

// Promise Chaining
let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    resolve(56);
  }, 2000);
});

a1.then((value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
})
  .then((value) => {
    console.log("We are done");
    return 2;
  })
  .then((value) => {
    console.log("Now we are pakka done");
  });

// multiple handlers
let b1 = new Promise((resolve, reject) => {
  // alert("Hey I am not resolved")
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

b1.then(() => {
  console.log("Hurray");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 6000);
  });
}).then((value) => {
  console.log(value);
});

b1.then(() => {
  console.log("Congratulations this promise is now resolved");
});
