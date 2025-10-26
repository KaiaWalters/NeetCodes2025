class Solution {
  mergeTwoLists(list1, list2) {
    const dummy = new ListNode(-1);
    let tail = dummy;

    let l1 = list1;
    let l2 = list2;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        tail.next = l1;     
        l1 = l1.next;       
      } else {
        tail.next = l2;     
        l2 = l2.next;       
      }
      tail = tail.next;     
    }

    
    tail.next = l1 || l2;

    return dummy.next;
  }
}
