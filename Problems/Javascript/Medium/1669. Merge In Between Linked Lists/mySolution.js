/**
 * Beats 79.27%
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  const head = list1;
  const newStart = list2;
  let newEnd = null;
  while (list2.next !== null) {
    list2 = list2.next;
  }
  newEnd = list2;

  let index = 0;
  let temp = null;
  while (index <= b) {
    if (index === a - 1) {
      temp = list1;
    }

    list1 = list1.next;
    index++;
  }
  temp.next = newStart;
  newEnd.next = list1;
  return head;
};
