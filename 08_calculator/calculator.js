const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, num) => { return total += num; }, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total * num, 1);
};

const power = function(num, power) {
  let total = 1;
  for (let i = 0 ; i < power; i++) {
    total *= num;
  };
  return total;
};

const factorial = function(num) {
	let total = 1;
  for (let i = 0; i < num; i++) {
    total *= (num - i);
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
