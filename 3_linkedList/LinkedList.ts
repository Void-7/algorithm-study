class ListNode<T = number> {
  value: T
  prev!: ListNode<T>
  next!: ListNode<T>
  constructor(val: T) {
    this.value = val
  }
}

class LinkedList<T = number> {
  head: ListNode<T>
  tail: ListNode<T>
  length: number

  constructor() {
    this.head = new ListNode(undefined as any)
    this.tail = new ListNode(undefined as any)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.length = 0
  }

  unshift(val: T) {
    const node = new ListNode(val)
    const next = this.head.next
    this.head.next = node
    node.prev = this.head
    node.next = next
    next.prev = node
    this.length++
    return this.length
  }

  shift() {
    if (this.length > 0) {
      const first = this.head.next
      this.remove(first)
      return first
    }
    return undefined
  }

  push(val: T) {
    const node = new ListNode(val)
    const prev = this.tail.prev
    this.tail.prev = node
    node.next = this.tail
    node.prev = prev
    prev.next = node
    this.length++
    return this.length
  }

  pop() {
    if (this.length > 0) {
      const last = this.tail.prev
      this.remove(last)
      return last
    }
    return undefined
  }

  first() {
    if (this.length === 0) return undefined
    return this.head.next.value
  }

  last() {
    if (this.length === 0) return undefined
    return this.tail.prev.value
  }

  private remove(node: ListNode<T>) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
  }
}

export {}

// java查找链表元素：起点折半查找 这样最坏情况也只要找一半就可以了。
// Node<E> node(int index) {
//   // assert isElementIndex(index);

//   if (index < (size >> 1)) {
//       Node<E> x = first;
//       for (int i = 0; i < index; i++)
//           x = x.next;
//       return x;
//   } else {
//       Node<E> x = last;
//       for (int i = size - 1; i > index; i--)
//           x = x.prev;
//       return x;
//   }
// }
