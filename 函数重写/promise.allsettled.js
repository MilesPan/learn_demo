function allSettled(promises) {
  // your code here
  return new Promise((resolve, rejected) => {
    let count = 0;
    const res = [];
    const targetLength = promises.length;
    function executor(index,value) {
      console.log(value, count, targetLength);
      count++;
      res[index] = value;
      if (count === targetLength) {
        resolve(res);
      }
    }
    for (let i = 0; i < targetLength; i++) {
      let cur = promises[i];
      if (cur instanceof Promise) {
        cur.then(
          (value) => {
            executor(i,value);
          },
          (reason) => {
            executor(i,reason);
          }
        );
      } else {
        executor(i,cur);
      }
    }
  });
}
allSettled([1, 2, 3, 4]).then((va) => console.log(va));
