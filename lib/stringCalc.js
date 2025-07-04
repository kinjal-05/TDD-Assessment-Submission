function getSum(arrayOfNumbers)
{
    let sum = 0;

    for(const num of arrayOfNumbers)
    {
        sum = sum + num;
    }

    return sum;
}


function parseHeader(str) 
{

    const defaults = [',', '\n'];

    if (!str.startsWith('//')) 
    {
        return { payload: str, delimiters: defaults };
    }

    const rest = str.slice(2);
    const nl   = rest.indexOf('\n');
    const spec = nl === -1 ? rest[0] : rest.slice(0, nl);
    const payload = nl === -1 ? rest.slice(1) : rest.slice(nl + 1);

    let delimiters = [];

    if (spec.startsWith('[')) 
    {
        const matches = spec.match(/\[([^\]]+)]/g) || [];
        delimiters = matches.map(m => m.slice(1, -1));
    } 
    
    else 
    {
        let d = spec;
        if (d.startsWith('\\') && d.length > 1) d = d.slice(1);
        delimiters = [d];
    }

    return { payload, delimiters: delimiters.length ? delimiters : defaults };
}


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

    const { payload, delimiters } = parseHeader(numbers);

    const escapeRx = s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const splitRegex = new RegExp(delimiters.map(escapeRx).join('|'))

    const actual_Numbers = payload
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
    
    sum = getSum(actual_Numbers);

    return sum;

}

module.exports = {add , getSum};