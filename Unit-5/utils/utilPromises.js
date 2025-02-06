function promise1() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Promise1');
    }, 10000);
  });
}

function promise2() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Promise2');
    }, 20000);
  });
}

module.exports = {
  promise1,
  promise2,
};
