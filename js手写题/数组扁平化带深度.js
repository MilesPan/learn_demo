// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (depth) {
      if (Array.isArray(item)) {
        depth--;
        res.push(...flat(item, depth));
        depth++;
      } else {
        res.push(item);
      }
    } else {
      res.push(item);
    }
  }
  return res;
}
const arr = [1, [2], [3, [4]]];

// [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

function throttle(func, wait) {
  // your code here
  let lock = false;
  let timer;
  return function (...args) {
    if ((lock = true)) {
      return;
    } else {
      timer = window.setTimeout(() => {
        lock = false;
      }, wait);
      return func(args);
    }
  };
}

let currentTime = 0;

const run = (input) => {
  currentTime = 0;
  const calls = [];

  const func = (arg) => {
    calls.push(`${arg}@${currentTime}`);
  };

  const throttled = throttle(func, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => throttled(arg), time);
  });
  return calls;
};

console.log(run(["A@0", "B@2", "C@3"]));
