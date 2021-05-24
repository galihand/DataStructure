class List {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
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
      node.next = new List(data)
    }
  }

  addFristNode(data) {
    let newNode = new List(data)
    newNode.next = this.head
    this.head = newNode
  }

  print() {
    console.log(this.head)
  }
}

const LinkedList = new SinglyLinkedList()

LinkedList.addLastNode(5)
LinkedList.addLastNode(4)
LinkedList.addLastNode(3)
LinkedList.addLastNode(10)
LinkedList.addFristNode(2)
LinkedList.print()