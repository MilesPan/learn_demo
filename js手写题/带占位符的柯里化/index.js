function merge(p1, p2) {
  for (let i = 0; i < p1.length; i++) {
    if (p2.length) {
      if (typeof p1[i] === "symbol") {
        const first = p2.shift();
        p1[i] = first;
      }
    } else {
      break;
    }
  }
  return [...p1, ...p2];
}

function curry(fn, ...initParams) {
  // your code here
  return function func(...args) {
    const mergedArgs = merge([...initParams], [...args]);
    //  合并后的参数中存在占位符的话 必须占位符之前的的参数已经能满足才能返回  或者根本不存在占位符且能满足
    if (
      mergedArgs.findIndex((_) => typeof _ === "symbol") >= fn.length - 1 ||
      (mergedArgs.length >= fn.length &&
        mergedArgs.findIndex((_) => typeof _ === "symbol") === -1)
    )
      return fn(...mergedArgs);
    else {
      return curry(fn, ...mergedArgs);
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
curry.placeholder = Symbol();
const curriedJoin = curry(join);
const _ = curry.placeholder;
console.log(curriedJoin(_, _, _)(1)(_, 3)(2));
