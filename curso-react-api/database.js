var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text UNIQUE, 
            lastname text , 
            email text, 
            CONSTRAINT name_unique UNIQUE (name)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO users (name, lastname, email) VALUES (?,?,?)'
                db.run(insert, ["Diogenes","Uilia", "Diogenes@example.com"])
                db.run(insert, ["maria","merli","maria@example.com"])
                db.run(insert, ["julia","juliana","julia@example.com	"])
            }
        });  
    }
});


module.exports = db