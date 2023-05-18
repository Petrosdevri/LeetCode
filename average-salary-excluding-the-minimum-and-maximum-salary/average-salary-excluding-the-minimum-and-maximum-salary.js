/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a - b);
    let average = 0;

    for(let i=0; i<salary.length; i++) {
        if(salary[i] === salary[0] || salary[i] === salary[salary.length-1]) {
            average += 0;
        } else {
            average += salary[i]
        }
    }
    return average/(salary.length-2);
};