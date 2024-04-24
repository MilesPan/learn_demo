/**
 * 时间复杂度也是n^2
 * 但是在数组不长时,效率比冒泡和选择更好
 */
const insertSort = (arr) => {
  // 从第二个数开始，往前比较
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        //   如果temp小于当前比较的元素，就将temp插入到这个元素之前
        arr.splice(i, 1); //将temp从数组中删掉出来
        arr.splice(j, 0, temp); //将temp插入到当前比较元素之前
        i = j; //更改temp的下标
      }
      //   如果temp大于当前比较的元素，说明比前面所有的数都大，就直接不用比较了
      else {
        break;
      }
    }
  }
  return arr;
};
const insertSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
};
console.log(insertSort2([2, 4, 5, 3, 1, 3, 6, 7, 1, 2, 3]));
