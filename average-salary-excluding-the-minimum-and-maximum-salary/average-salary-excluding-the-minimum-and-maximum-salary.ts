function average(salary: number[]): number {
    salary.sort((a, b) => a - b);
    let average: number = 0;

    for(let i=0; i<salary.length; i++) {
        if(salary[i] === salary[0] || salary[i] === salary[salary.length-1]) {
            average += 0;
        } else {
            average += salary[i];
        }
    }
    return average/(salary.length-2);
};