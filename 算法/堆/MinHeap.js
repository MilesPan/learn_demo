class MinHeap {
  constructor() {
    this.heap = [];
  }
  //   获取父节点
  getParentIndex(childIndex) {
    //   因为完全二叉树，每个父节点的下标都是左子节点的下标减一再除以二
    // return Math.floor((childIndex - 1) / 2);
    // 二进制数字往右移动一位 ，相当于除2，并且舍去小数
    return (childIndex - 1) >> 1;
  }
  //   获取左侧子节点
  getLeftIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  //   获取右侧子节点
  getRightIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  //   交换
  swap(index1, index2) {
    //   父节点的值大于子节点的值就要交换
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  //   上移
  shiftUp(index) {
    if (index === 0) return;
    let parentIndex = this.getParentIndex(index);
    if (
      (this.heap[parentIndex]?.value ?? this.heap[parentIndex]) >
      (this.heap[index]?.value ?? this.heap[index])
    ) {
      this.swap(parentIndex, index);
      //   交换后继续上移
      this.shiftUp(parentIndex);
    }
  }
  //   下移
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    //   最小堆，子节点都是大于父节点的
    if (
      (this.heap[leftIndex]?.value ?? this.heap[leftIndex]) <
      (this.heap[index]?.value ?? this.heap[index])
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      (this.heap[rightIndex]?.value ?? this.heap[rightIndex]) <
      (this.heap[index]?.value ?? this.heap[index])
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  //   插入
  insert(value) {
    //   将值插入到数组中
    this.heap.push(value);
    //   再进行排序，因为堆结构所以子节点永远比父节点大或者小
    // 参数是新值的下标
    this.shiftUp(this.heap.length - 1);
  }
  //   删除堆顶
  pop() {
    //   不能直接删除数组第一个元素，因为所有元素都会往前移一位，堆的结构发生变化
    // 将堆顶元素设置为数组尾部元素
    this.heap[0] = this.heap.pop();
    // 然后进行一个下移动排序操作，将这个元素移动到其合适的位置
    this.shiftDown(0);
  }
  pop2() {
    if (this.heap.length === 1) return this.heap[0];
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆大小
  size() {
    return this.heap.length;
  }
  sort() {
    let res = [];
    let len = this.heap.length;
    for (let i = 0; i < len; i++) {
      console.log(this.heap);
      res.push(this.pop2());
    }
    return res;
  }
}
// const h = new MinHeap();
// h.insert(1);
// h.insert(3);
// h.insert(2);
// h.insert(7);
// console.log(h.sort());
export default MinHeap;

// /**
//  * class Heap{
//     heap:number[];
//     limit:number;
//     constructor(limit: number){
//         this.heap = [];
//         this.limit = limit;

//     }

//     private getParentIndex(index){
//         return (index - 1) >> 1
//     }

//     private swap(l,r){
//         [this.heap[l],this.heap[r]] = [this.heap[r],this.heap[l]];
//     }

//     private swapChildDown(index, l, r){
//         if(this.heap[index] > this.heap[l]){
//             this.swap(l,index);
//             this.shiftDown(l);
//         }
//         if(this.heap[index] > this.heap[r]){
//             this.swap(r,index);
//             this.shiftDown(r);
//         }
//     }

//     private getLeftIndex(index){
//         return index * 2 + 1
//     }

//     private getRightIndex(index){
//         return index * 2 + 2
//     }

//     private shiftUp(index){
//         if(index = 0) return;
//         let parentIndex = this.getParentIndex(index);
//         console.log(index,parentIndex);
//         if(this.heap[parentIndex] > this.heap[index]){
//             this.swap(index,parentIndex);
//             this.shiftUp(parentIndex);
//         }
//     }

//     private shiftDown(index){
//         let l = this.getLeftIndex(index);
//         let r = this.getRightIndex(index);
//         this.swapChildDown(index,l,r);
//     }

//     limitInsert(val){
//         if(this.size() >=  this.limit && this.peak() > val) return
//         this.heap.push(val);
//         this.shiftUp(this.size() - 1);
//         if(this.size() > this.limit){
//             this.pop();
//         }
//     }

//     pop(){
//         this.heap[0] = this.heap.pop();
//         this.shiftDown(0);
//     }
//     size(){
//         return this.heap.length;
//     }
//     peak(){
//         return this.heap[0];
//     }
// }
//  */
