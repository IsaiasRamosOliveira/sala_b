function Person(name, age, balance) {
  return {
    name,
    age,
    balance,
    getName() {
      console.log(`get name: ${name}`);
    },
  };
}

const person = Person("Isaías", 20, 7000);

console.log(person);
