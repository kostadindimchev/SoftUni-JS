class List {
  constructor() {
    this.array = [];
    this.size = this.array.length;
  }

  add(element) {
    this.array.push(element);
    this.array.sort((a, b) => a - b);
    this.size = this.array.length;
  }

  remove(index) {
    if (index >= this.array.length || index < 0) {
      throw new Error("index is out of range");
    } else {
      this.array.splice(index, 1)
      this.size = this.array.length;
    }
  }

  get(index) {
    if (index >= this.array.length || index < 0) {
      throw new Error("index is out of range");
    } else {
      return this.array[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));




