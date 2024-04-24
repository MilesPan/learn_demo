  // 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
      // addTask(1000, "1");
      // addTask(500, "2");
      // addTask(300, "3");
      // addTask(400, "4");
      // 整个的完整执行流程：
      // 一开始1、2两个任务开始执行
      // 500ms时，2任务执行完毕，输出2，任务3开始执行
      // 800ms时，3任务执行完毕，输出3，任务4开始执行
      // 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
      // 1200ms时，4任务执行完毕，输出4

      /**调度类
       *
       */
      //   class Scheduler {
      //     constructor(limit) {
      //       // 任务队列
      //       this.queue = [];
      //       // 最大限制数
      //       this.maxCount = limit;
      //       // 当前任务进行数
      //       this.runningCounts = 0;
      //     }
      //     add(promiseGenerator) {
      //       this.queue.push(promiseGenerator);
      //       this.request();
      //     }
      //     request() {
      //       if (
      //         !this.queue ||
      //         !this.queue.length ||
      //         this.runningCounts >= this.maxCount
      //       ) {
      //         return;
      //       }
      //       const promiseRun = this.queue.shift();
      //       this.runningCounts++;
      //       promiseRun().then(() => {
      //         this.runningCounts--;
      //         this.request();
      //       });
      //     }
      //   }
      class Scheduler {
        constructor(limit) {
          this.maxLimit = limit;
          this.runningQueue = [];
          this.runningCount = 0;
        }
        add(fn) {
          this.runningQueue.push(fn);
          this.request();
        }
        request() {
          if (
            !this.runningQueue ||
            !this.runningQueue.length ||
            this.runningCount >= this.maxLimit
          )
            return;
          const task = this.runningQueue.shift();
          this.runningCount++;
          task().then(() => {
            this.runningCount--;
            this.request();
          });
        }
      }
      const timeout = (time) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, time);
        });
      };
      const scheeduler = new Scheduler(2);
      const addTask = (time, fn) => {
        scheeduler.add(() => {
          return timeout(time).then(() => {
            fn();
          });
        });
      };
      console.time("timeStart");
      addTask(1000, () => {
        console.log("1");
      });
      addTask(5000, () => {
        console.log("2");
      });
      addTask(3000, () => {
        console.log("3");
      });
      addTask(2000, () => {
        console.log("4");
      });
      // 1000ms