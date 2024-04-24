export default class Mypromise {
  static PENDING = "pending";
  static FULFUILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(exe) {
    this.state = Mypromise.PENDING;
    this.value = null;
    // 11.异步改变状态时要执行的函数
    this.callbacks = [];
    // 3.函数体内如果有错误应该执行reject
    try {
      exe(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(value) {
    // 2.只能从pending状态改变
    if (this.state === Mypromise.PENDING) {
      // 1.先改变状态
      this.state = Mypromise.FULFUILLED;
      this.value = value;
      // 15. 改变状态后执行的函数也要是异步的
      queueMicrotask(() => {
        // 13. 相当于先执行了then的方法，将函数压入到了callbacks中，微任务执行完后再从callbacks中获取函数执行
        this.callbacks.forEach((callback) => {
          callback.onFUlfilled(this.value);
        });
      });
    }
  }
  reject(reason) {
    // 2.只能从pending状态改变
    if (this.state === Mypromise.PENDING) {
      // 先改变状态
      this.state = Mypromise.REJECTED;
      this.value = reason;
      // 15. 改变状态后执行的函数也要是异步的
      queueMicrotask(() => {
        // 13. 从callbacks中获取函数执行
        this.callbacks.forEach((callback) => {
          callback.onRejected(this.value);
        });
      });
    }
  }
  // 4.then接受两个函数
  then(onFUlfilled, onRejected) {
    // 6.then可以不传成功或者失败的回调函数,不传就设置一个默认函数
    if (typeof onFUlfilled !== "function") {
      onFUlfilled = () => {
        // 样式穿透
        return this.value;
      };
    }
    if (typeof onRejected !== "function") {
      onRejected = () => this.value;
    }
    // 16.链式调用 因此要返回一个新的promise
    let promise = new Mypromise((resolve, reject) => {
      // 9.如果状态改变是异步改变的，例如在一秒后改变状态，那么我们需要进行处理
      if (this.state === Mypromise.PENDING) {
        // 12.注意压入时是成对压入，按对象形式
        this.callbacks.push({
          // 14. 准备状态的错误也要放到reject中处理
          onFUlfilled: (value) => {
            this.parse(promise, onFUlfilled(value), resolve, reject);
            // try {
            //   let res = onFUlfilled(value);
            //   if (res instanceof Mypromise) {
            //     res.then(resolve, reject);
            //   } else {
            //     resolve(res);
            //   }
            // } catch (error) {
            //   reject(error);
            // }
          },
          onRejected: (value) => {
            this.parse(promise, onRejected(value), resolve, reject);
            // try {
            //   let res = onRejected(value);
            //   resolve(res);
            // } catch (error) {
            //   reject(error);
            // }
          },
        });
      }
      if (this.state === Mypromise.FULFUILLED) {
        // 8.then中的函数都是异步执行
        queueMicrotask(() => {
          this.parse(promise, onFUlfilled(this.value), resolve, reject);
          // try {
          //   // 5.只有状态改变时才执行then的内容
          //   let res = onFUlfilled(this.value);
          //   // 18. 处理返回promise的情况
          //   if (res instanceof Mypromise) {
          //     res.then(resolve, reject);
          //     // (value) => {
          //     //   resolve(value);
          //     // },
          //     // (reason) => {
          //     //   reject(reason);
          //     // }
          //     // );
          //   } else {
          //     // 17.链式调用改变成功的状态
          //     resolve(res);
          //   }
          // } catch (error) {
          //   reject(error);
          // }
        });
        //7.在then的函数体内如果有错误的话还是放在reject里处理
      }
      if (this.state === Mypromise.REJECTED) {
        // 8.then中的函数都是异步执行
        queueMicrotask(() => {
          this.parse(promise, onRejected(this.value), resolve, reject);
          //7.在then的函数体内如果有错误的话还是放在reject里处理
          // try {
          //   let res = onRejected(this.value);
          //   // 18. 处理返回promise的情况
          //   if (res instanceof Mypromise) {
          //     res.then(resolve, reject);
          //     //   (value) => {
          //     //     resolve(value);
          //     //   },
          //     //   (reason) => {
          //     //     reject(reason);
          //     //   }
          //     // );
          //   } else {
          //     // 17.链式调用改变失败的状态 默认都是成功状态
          //     resolve(res);
          //   }
          // } catch (error) {
          //   reject(error);
          // }
        });
      }
    });
    return promise;
  }
  parse(promise, res, resolve, reject) {
    // 19.在promise里不能返回自己。
    if (promise === res) {
      throw new TypeError("error");
    }
    try {
      // 5.只有状态改变时才执行then的内容
      // let res = onFUlfilled(this.value);
      // 18. 处理返回promise的情况
      if (res instanceof Mypromise) {
        res.then(resolve, reject);
        // (value) => {
        //   resolve(value);
        // },
        // (reason) => {
        //   reject(reason);
        // }
        // );
      } else {
        // 17.链式调用改变成功的状态
        resolve(res);
      }
    } catch (error) {
      reject(error);
    }
  }
  static resolve(value) {
    return new Mypromise((resolve, reject) => {
      // 如果返回的是promise，也要处理
      if (value instanceof Mypromise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }
  static reject(value) {
    return new Mypromise((resolve, reject) => {
      if (value instanceof Mypromise) {
        value.then(resolve, reject);
      } else {
        reject(value);
      }
    });
  }
}
