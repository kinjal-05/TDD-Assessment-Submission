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

    let delimiters = [',', '\n'];

    if(numbers.startsWith('//'))
    {
        const newLineIndex = numbers.indexOf('\n');
        const delimiterSpec = numbers.slice(2, newLineIndex);
        numbers = numbers.slice(newLineIndex + 1);
        delimiters.push(delimiterSpec);
    }

    const escape = str => str.replace(/[.*+?^${}()|[\]]/g, '\\$&');
    const splitRegex = new RegExp(delimiters.map(escape).join('|'));

    const actual_Numbers = numbers
                           .split(splitRegex)                
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