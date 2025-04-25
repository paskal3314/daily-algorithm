/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const hashMap = new Map();
  let curr = head;

  while (curr) {
    hashMap.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const copy = hashMap.get(curr);
    copy.next = hashMap.get(curr.next) || null;
    copy.random = hashMap.get(curr.random) || null;
    curr = curr.next;
  }
  return hashMap.get(head);
};
