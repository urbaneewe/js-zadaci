//1,6,5,3,2,4
(function () {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 0);

  new Promise(function (resolve) {
    resolve();
  }).then(() => {
    console.log(3);
  });

  setTimeout(function () {
    console.log(4);
  }, 100);

  process.nextTick(function () {
    console.log(5);
  });

  console.log(6);
})();
