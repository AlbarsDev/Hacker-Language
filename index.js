

function convertirALeet(texto, nivel) {
    const diccionarioLeetSimple = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    const diccionarioLeetIntermedio = {
        'a': '4',
        'b': '8',
        'e': '3',
        'g': '6',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7',
        'z': '2'
    };

    const diccionarioLeetAvanzado = {
        'a': '4',
        'b': '8',
        'e': '3',
        'g': '6',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7',
        'z': '2',
        'h': '#',
        'm': '/\\/\\',
        'n': '|\\|',
        'r': '|2',
        'u': '|_|',
        'v': '\\/',
        'w': '\\/\\/',
        'y': '`/'
    };

    let diccionarioLeet;

    switch(nivel) {
        case 'simple':
            diccionarioLeet = diccionarioLeetSimple;
            break;
        case 'intermedio':
            diccionarioLeet = diccionarioLeetIntermedio;
            break;
        case 'avanzado':
            diccionarioLeet = diccionarioLeetAvanzado;
            break;
        default:
            diccionarioLeet = diccionarioLeetSimple;
    }

    let textoLeet = texto.toLowerCase();

    for(let caracter in diccionarioLeet) {
        const regex = new RegExp(caracter, 'g');
        textoLeet = textoLeet.replace(regex, diccionarioLeet[caracter]);
    }

    return textoLeet;
}

console.log(convertirALeet('Hola Mundo!', 'avanzado'));
