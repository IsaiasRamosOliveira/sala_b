function Person(name, age, balance) {
  this.name = name;
  this.age = age;
  this.balance = balance;
  this.getName = () => {
    console.log(`get name: ${this.name}`);
  };
}

const person1 = new Person("isaias", 20, 8000);

console.log(person1);
