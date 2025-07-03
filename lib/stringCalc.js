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
    
    return 0;
}

module.exports = {add};