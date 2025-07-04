function add(numbers)
{
    if (numbers.trim() === '') 
    {
        return 0;
    }

    if(numbers.length == 0)
    {
        return 0;
    }

    if(numbers.length == 1)
    {
        return (numbers.charCodeAt(0) - 48);
    }

    const actual_Numbers = numbers
                           .split(/,|\n/)               // split string in array by ',' or '\n' 
                           .map(no => no.trim())       // remove surrounding space
                           .filter(Boolean)            // drop empty string
                           .map(Number);               // convert to number
    
    let sum = 0;
    
    for(const number of actual_Numbers)
    {
        sum = sum + number;
    }

    return sum;

}

module.exports = {add};