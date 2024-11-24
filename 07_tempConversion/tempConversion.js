const convertToCelsius = function(fahrenheit) {
    // Formula: (F - 32) * 5/9 = C
    const celsius = (fahrenheit - 32) * 5/9;
    // Rounds up to nearest tenth, but ensures no decimal places if integer.
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
    // Formula: (C * (9/5)) + 32 = 32F
    const fahrenheit = (celsius * (9/5)) + 32;
    return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
