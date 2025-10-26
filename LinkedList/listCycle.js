// I had to look up a solution for this one. The idea is to first find the middle of the list, then reverse the second half, and finally merge the two halves together in the required order./**



class ListNode {
  reorderList(head) {
    if (!head) return;

    // 1) Find the middle (slow ends at mid; first half is longer on odd length)
    let slow = head, fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // 2) Reverse the second half (starting at slow.next)
    let prev = null, curr = slow.next;
    slow.next = null; // split the list

    while (curr) {
      const nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    // 'prev' is now head of reversed second half

    // 3) Merge the two halves, alternating nodes
    let p1 = head, p2 = prev;
    while (p2) {
      const n1 = p1.next;
      const n2 = p2.next;

      p1.next = p2;
      p2.next = n1;

      p1 = n1;
      p2 = n2;
    }
  }
}
