/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.8 + 32;
    let tempArr = [kelvin, fahrenheit];
    return tempArr;
};