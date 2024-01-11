//Beats 5.23%
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const arr = [];
  let curr = head;
  while (curr?.next) {
    const index = arr.findIndex((el) => el === curr.next);
    if (index === -1) {
      arr.push(curr);
      curr = curr.next;
    } else {
      return curr.next;
    }
  }
  return null;
};
function run() {}

run();
