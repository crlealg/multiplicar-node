const argv = require('./config/yargs').argv;
const colors = require('colors/safe');;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo))) //con color
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// obtener o leer el parametro de process.argv
// let argv2 = process.argv;

//console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1];