function add(numbers)
{
    if(numbers.length == 0)
    {
        return 0;
    }

    if(numbers.length == 1)
    {
        return (numbers.charCodeAt(0) - 48);
    }

    const actual_Numbers = numbers
                           .split(',')                 // split string in array by ',' 
                           .map(no => no.trim())       // remove surrounding space
                           .filter(Boolean)            // drop empty string
                           .map(Number);               // convert to number
    
    return actual_Numbers[0] + (actual_Numbers[1] ?? 0);                        

}

module.exports = {add};