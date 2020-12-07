const fs = require('fs');
const colors = require('colors'); // llamar al paquete de colores

let listarTabla = (base, limite = 10) => {

    console.log('========================================'.green);
    console.log(`==tabla de ${base}===`.green);
    console.log('========================================'.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // validar si el parametro es un numero
        if (!Number(base)) {
            reject(`La valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}