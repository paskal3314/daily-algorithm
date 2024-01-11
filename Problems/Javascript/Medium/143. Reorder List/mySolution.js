// Beats 39.5%
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let arr = [];
  let node = head;
  while (node !== null) {
    arr.push(node);
    node = node.next;
  }
  let left = 1;
  let right = arr.length - 1;
  let newHead = head;
  let curr = newHead;
  let isRightTurn = true;
  while (left <= right) {
    if (isRightTurn === true) {
      curr.next = arr[right];
      curr = curr.next;
      right -= 1;
    } else {
      curr.next = arr[left];
      curr = curr.next;
      left += 1;
    }
    isRightTurn = !isRightTurn;
  }
  curr.next = null;
  return newHead;
};
