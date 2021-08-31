//
// what will the console.log at the bottom return and why?
//

const person1 = {
  name: "John",
  address: {
    city: "London",
    country: "England",
  },
  characteristics: {
    height: 188,
    age: 42,
  },
};

const person2 = {
  name: "Doe",
  address: person1.address,
  characteristics: {
    height: person1.characteristics.height,
    age: 54,
  },
};

person1.address.city = "Dublin";
person1.address.country = "Ireland";
person1.characteristics.height = 179;

// what will these return?
console.log(person2.address.country);
console.log(person2.characteristics.height);
