/**
 * Beats 25%
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const values = [];
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }
  const reversed = [...values].reverse();
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
};
