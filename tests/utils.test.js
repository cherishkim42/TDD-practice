const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// MUST REMEMBER THIS
// USING FAT ARROWS WHEN USING MOCHA AND CHAI WILL MAKE TESTS FAIL WHEN YOUR CODE IS PERFECTLY FINE
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const rect = utils.area(5, 6);
  expect(rect).to.be.a("number");
  expect(rect).to.equal(30);
});

it("should return the perimeter of a 5 by 6 rectangle", function() {
  const rectPerim = utils.perimeter(5, 6);
  expect(rectPerim).to.be.a("number");
  expect(rectPerim).to.equal(22);
});

it("should return the area of a circle of radius 5", function() {
  const circle = utils.circleArea(5);
  expect(circle).to.be.a("number");
  expect(circle).to.equal(Math.PI * 25);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================


const cart = {items: [ {name: "app", price: 0}, {name: "bat", price: 1}, {name: "cat", price: 2} ]}

it("Should create a new (object) Item with name and price", function() {
  const name = cart.items[0].name;
  const price = cart.items[0].price;
  expect(name).to.be.a("string");
  expect(price).to.be.a("number");
  expect(name).to.equal("app");
  expect(price).to.equal(0);
});

it("Should return an array containing all items in cart", function() {
  const urStuff = cart.items;
  expect(urStuff).to.be.a("array");
});

it("Should add a new item to the shopping cart", function() {
  cart.items.push({name: 'day', price: 3});
  const thingName = cart.items[3].name;
  const thingPrice = cart.items[3].price;
  expect(thingName).to.be.a("string");
  expect(thingName).to.equal("day");
  expect(thingPrice).to.be.a("number");
  expect(thingPrice).to.equal(3);
});

it("Should return the number of items in the cart", function() {
  const cartQuant = cart.items.length;
  expect(cartQuant).to.be.a("number");
  expect(cartQuant).to.equal(4);
});

it("Should remove items from cart", function() {
  cart.items.pop();
  const shrunkCart = cart.items.length;
  expect(shrunkCart).to.be.a("number");
  expect(shrunkCart).to.equal(3);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
