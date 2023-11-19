const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){ // código asíncrono, se ejecutará por otro hilo
    if(err){
        console.log(err);
    }
    console.log('Archivo creado')
})

/* const result = fs.writeFile('', '') // código bloqueante (hasta que no se complete no seguirá con las siguientes líneas) */

console.log('última línea de código')
/*
const users = query('SELECT * FROM Users');

query()('SELECT * FROM Users', function(err, users) {
    if(err){
        console.log(err)
    }
    if (users){
        console.log('tusa')
    }
})
*/