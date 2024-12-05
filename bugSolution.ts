function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate over the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Use the join() method
console.log(greeter(user.join(", ")));