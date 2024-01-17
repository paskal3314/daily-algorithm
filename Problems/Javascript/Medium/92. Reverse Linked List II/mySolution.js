/**
 * Beats 33.25%
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }

  const arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  left--;
  right--;
  const subArray = arr.slice(left, right + 1);
  const reversed = subArray.reverse();
  for (let i = 0; i < reversed.length; i++) {
    arr[left + i] = reversed[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr[i].next = arr[i + 1];
    }
  }
  arr[arr.length - 1].next = null;
  return arr[0];
};
