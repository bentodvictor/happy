const Database = require('sqlite-async');

function execute(db) {
   return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

// db vai abrir (ou criar) diretório e colocara na pasta o arquivo sqlite
module.exports = Database
                    .open(__dirname + '/database.sqlite')
                    .then(execute)