class Data {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  add(data) {
    if (!this.root) this.root = new Data(data)
    else this.addNewChild(this.root, data)
  }

  addNewChild(tree, data) {
    if (data < tree.data) {
      if (tree.left !== null) this.addNewChild(tree.left, data)
      else tree.left = new Data(data)
    } else {
      if (tree.right !== null) this.addNewChild(tree.right, data)
      else tree.right = new Data(data)
    }
  }

  print() {
    console.log(this.root)
  }
}

const Tree = new BinaryTree()

Tree.add(5)
Tree.add(10)
Tree.add(3)
Tree.add(1)
Tree.add(8)
Tree.add(2)
Tree.print()