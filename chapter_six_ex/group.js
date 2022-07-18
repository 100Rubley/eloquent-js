class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  delete(value) {
    this.members = this.members.filter(item => item !== value);
  }

  static from(array) {
    let group = new Group;
    for (let value of array) group.add(value);

    return group;
  }
}
