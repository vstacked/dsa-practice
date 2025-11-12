class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let _head = head;
  let steps = 1;

  while (_head?.next !== null) {
    steps++;
    _head = _head?.next!;
  }

  _head = head;

  for (let i = 1; i < Math.floor(steps / 2) + 1; i++) {
    _head = _head?.next!;
  }

  return _head;
}
