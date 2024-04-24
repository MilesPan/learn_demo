class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(exe) {
    this.state = MyPromise.PENDING;
    this.value = null;
    exe(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    if (this.state === MyPromise.PENDING) {
    }
  }
  reject(value) {
    if (this.state === MyPromise.PENDING) {
    }
  }
  then(onFUlfilled, onRejected) {
    if (typeof onFUlfilled !== "function") {
      onFUlfilled = () => {
        return this.value;
      };
    }
    if (typeof onRejected !== "function") {
      onRejected = () => {
        return this.value;
      };
    }
    let promise = new MyPromise((resolve, reject) => {
      if (this.state === MyPromise.FULFILLED) {
      }
      if (this.state === MyPromise.REJECTED) {
      }
      if (this.state === MyPromise.PENDING) {
      }
    });
    return promise;
  }
}
new Promise((resolve, reject) => {
  // ....
  resolve(123);
}).then(
  (res) => {},
  (err) => {}
);
