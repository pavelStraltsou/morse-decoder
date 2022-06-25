const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = []
    let finalStr = ''

    for (let i = 0; i < expr.length; i++) {
        if (i % 10 === 0) {
            arrExpr.push(expr.slice(i, i + 10))
        }
    }

    let arrMorse = arrExpr.map(i => {
        for (let u = 0; u < i.length; u++) {
            if (u % 2 === 0 && i[u] + i[u + 1] === '00') {
                i += ''
            } else if (u % 2 === 0 && i[u] + i[u + 1] === '10') {
                i += '.'
            } else if (u % 2 === 0 && i[u] + i[u + 1] === '11') {
                i += '-'
            }
        }
        return MORSE_TABLE[`${i.slice(10)}`] 
    })

    for (let j = 0; j < arrMorse.length; j++) {
        arrMorse[j] ? finalStr += arrMorse[j] : finalStr += ' '
    }
    
    return finalStr
}

module.exports = {
    decode
}