class List {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class CircularLinkedList {
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
    let newNode = new List(data)
    if (this.head === null) {
      this.head = newNode
      this.head.next = newNode
    }
    else {
      newNode.next = this.head
      let node = this.head
      while (node.next !== this.head) {
        node = node.next
      }
      node.next = newNode
    }
  }

  addFristNode(data) {
    let newNode = new List(data)
    let node = this.head
    while (node.next !== this.head) {
      node = node.next
    }
    node.next = newNode
    newNode.next = this.head
    this.head = newNode
  }

  print() {
    console.log(this.head)
  }
}

const LinkedList = new CircularLinkedList()

LinkedList.addLastNode(5)
LinkedList.addLastNode(4)
LinkedList.addLastNode(3)
LinkedList.addLastNode(10)
LinkedList.addFristNode(2)
LinkedList.print()
console.log(LinkedList.size())