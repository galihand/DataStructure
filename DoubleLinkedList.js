class List {
  constructor(data, prev = null) {
    this.prev = prev
    this.data = data
    this.next = null
  }
}

class DoubleLinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }

    return count
  }

  addLastNode(data) {
    if (this.head === null) this.head = new List(data)
    else {
      let node = this.head
      while (node.next) {
        node = node.next
      }
      node.next = new List(data, node)
    }
  }

  addFristNode(data) {
    let newNode = new List(data)
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  print() {
    console.log(this.head)
  }
}

const LinkedList = new DoubleLinkedList()

LinkedList.addLastNode(5)
LinkedList.addLastNode(4)
LinkedList.addLastNode(3)
LinkedList.addLastNode(10)
LinkedList.addFristNode(2)
LinkedList.print()
console.log(LinkedList.size())