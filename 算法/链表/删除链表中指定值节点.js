const deleteNode = (head, val) => {
  // 递归写法
  // if (head.val === val) {
  //   return head.next;
  // }
  // head.next = deleteNode(head.next, val);
  // console.log(head);
  // return head;

  // 迭代写法
  // 创建一个虚拟头节点，通过p.next ?== val来比较
  const Vnode = new ListNode(0);
  Vnode.next = head;
  // 创建一个指针遍历链表
  let p = Vnode;
  while (p?.next) {
    if (p.next.val === val) {
      // 如果值相等则直接跳过这个节点
      p.next = p.next.next;
    }
    p = p.next;
  }
  return Vnode.next;
};
