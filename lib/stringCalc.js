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

    if (numbers.startsWith('//')) 
    {
        const restOfString = numbers.slice(2);            
        const newIndex   = restOfString.indexOf('\n');

        if (newIndex === -1) 
        {
            delimiters = [restOfString[0]];
            numbers = restOfString.slice(1);
        } 
        else 
        {
            let spec = restOfString.slice(0, newIndex);           
            numbers = restOfString.slice(newIndex + 1);         

            if (spec !== '') 
            {
                if (spec.startsWith('\\') && spec.length > 1) 
                {
                    spec = spec.slice(1);
                }
                
                delimiters = [spec];
            }
        }
    }

    const escapeRx = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const splitRegex = new RegExp(delimiters.map(escapeRx).join('|'))

    const actual_Numbers = numbers
                           .split(splitRegex)                
                           .map(no => no.trim())       // remove surrounding space
                           .filter(Boolean)            // drop empty string
                           .map(Number);               // convert to number

    const negatives = actual_Numbers.filter(number => number < 0);

    if (negatives.length) 
    {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    let sum = 0;
    
    for(const number of actual_Numbers)
    {
        sum = sum + number;
    }

    return sum;

}

module.exports = {add};