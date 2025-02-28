module.exports = function toReadable (number) {
    const numberToWords ={
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety',
        100 : 'hundred',
    };

    if (number < 20) {
        return numberToWords[number];
    }
    else if (number < 100){
        const tens = Math.floor(number/10) * 10;
        const digits = number % 10;
        const result = numberToWords[tens] + (digits !== 0 ? ' ' + numberToWords[digits] : ''); 
        return result;
    }
    else{
        const hundreds = Math.floor(number/100);
        const remainder = number % 100;
        if ( remainder === 0){
            const result = numberToWords[hundreds] + ' hundred';
            return result;
        }
        else{
            const result = numberToWords[hundreds] + ' hundred ' + toReadable(remainder);
            return result ;
        }
    }
}


