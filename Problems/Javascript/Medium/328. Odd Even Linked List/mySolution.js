/**
 * Beats 23.95%
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head?.next) {
    return head;
  }
  let lastOddNode = head;
  let lastEvenNode = null;
  while (lastOddNode.next?.next) {
    lastOddNode = lastOddNode.next.next;
  }

  if (lastOddNode.next) {
    lastEvenNode = lastOddNode.next;
  }
  let leftNode = head;
  let rightNode = lastOddNode;
  while (leftNode !== lastOddNode) {
    const temp = leftNode.next;
    leftNode.next = leftNode.next.next;
    rightNode.next = temp;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  leftNode.next = lastOddNode.next;
  if (lastEvenNode) {
    lastEvenNode.next = null;
    rightNode.next = lastEvenNode;
  } else {
    rightNode.next = null;
  }
  return head;
};
