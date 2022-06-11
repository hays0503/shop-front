class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    // Создаём новый узел, который будет новым head,
    // при создании передаём второй аргумент, который указывает
    // что его "next" будет текущий head,
    // так как новый узел будет стоять перед текущем head.
    const newNode = new DoublyLinkedListNode(value, this.head)

    // Если есть head, то он больше не будет head.
    // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
    if (this.head) {
      this.head.previous = newNode
    }

    // Переназначаем head на новый узел
    this.head = newNode

    // Если ещё нет tail, делаем новый узел tail.
    if (!this.tail) {
      this.tail = newNode
    }

    // Возвращаем весь список.
    return this
  }

  append(value) {
    // Создаём новый узел.
    const newNode = new DoublyLinkedListNode(value)

    if (this.tail) {
      // Присоединяем новый узел к концу связного списка.
      this.tail.next = newNode
    }

    // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
    // так как новый узел будет теперь последним.
    newNode.previous = this.tail

    // Переназначаем tail на новый узел.
    this.tail = newNode

    // Если ещё нет head, делаем новый узел head.
    if (!this.head) {
      this.head = newNode
    }

    return this
  }

  // Создаём новые узлы из массива и добавляем в конец списка.
  fromArray(values) {
    values.forEach(value => this.append(value))

    return this
  }

  toNext() {
    let array = []
    let currentList = this.head
    while (currentList !== null) {
      array.push(currentList.value)
      currentList = currentList.next
    }
    let arrayList = []
    for (let index = 0; index < array.length; index++) {
      currentList = array[index].head
      arrayList.push([])
      while (currentList !== null) {
        arrayList[index].push(currentList.value)
        currentList = currentList.next
      }
    }
    /* if (this.head.value instanceof DoublyLinkedListNode) {
      console.log('Head', this.head.value.head.value.title)
    } */
    console.log(array)
    console.log(arrayList)
    arrayList.forEach(elements => elements.forEach(element => console.log(element.title)))
  }
}

class itemShop {
  constructor(title, description, cost) {
    this.title = title
    this.description = description
    this.cost = cost
  }
}

let doublyLinkedList1 = new DoublyLinkedList()
let a1 = new itemShop('Books1', 'Books description 1', 500)
let b2 = new itemShop('Books2', 'Books description 2', 500)
let c3 = new itemShop('Books3', 'Books description 3', 500)
doublyLinkedList1.prepend(a1)
doublyLinkedList1.append([b2, c3])

let doublyLinkedList2 = new DoublyLinkedList()
let a11 = new itemShop('Tools1', 'Tools description 1', 500)
let b11 = new itemShop('Tools2', 'Tools description 2', 500)
let c11 = new itemShop('Tools3', 'Tools description 3', 500)
doublyLinkedList2.prepend(a11)
doublyLinkedList2.append([b11, c11])

let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.fromArray([doublyLinkedList1, doublyLinkedList2])

doublyLinkedList.toNext()
