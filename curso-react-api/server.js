// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var cors = require("cors")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Servidor rodando na porta ${HTTP_PORT}`)
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Online" })
});


//Lista todos os users
app.get("/api/users", (req, res, next) => {

    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});
//Lista lastnames
app.get("/api/users/lastname", (req, res, next) => {
    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        var resp = rows.map((user) => {

        return {
           lastname: user.lastname,
           id:user.id
            }
        }
    );
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": resp
        })
    });
});
//Lista names
app.get("/api/user/name", (req, res, next) => {
    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        var resp = rows.map((user) => {

            return {
               name: user.name,
               id:user.id
                }
            }
        );
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": resp
        })
    });
});

//Retorna o user específico para aquele id, caso contrário, retorna uma mensagem de erro
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from users where id = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        if (row != null) {
            res.json({
                "message": "success",
                "data": row
            })
        } else {
            res.json({
                "message": "Não existe user para esse id"
            })
        }
    });
});

//Cria um user
app.post("/api/user", (req, res, next) => {
    var errors = []
    if (!req.body.lastname) {
        errors.push("lastname não especificado");
    }
    if (!req.body.email) {
        errors.push("Email não especificado");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    }
    var sql = 'INSERT INTO users (name, lastname, email) VALUES (?,?,?)'
    var params = [data.name, data.lastname, data.email]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        data.id = this.lastID;
        res.json({
            "message": "success",
            "data": data,
        })
    });
})

//Atualiza um user
app.patch("/api/user/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    }

    db.run(
        `UPDATE users set 
           name = COALESCE(?,name), 
           lastname = COALESCE(?,lastname), 
           email = COALESCE(?,email) 
           WHERE id = ?`,
        [data.name, data.lastname, data.email, req.params.id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({
                message: "success",
                data: data
            })
        });
})

//Remove um user
app.delete("/api/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM users WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.json({ "message": "deleted", changes: this.changes })
        });
})

// Insira outros endpoints aqui!


app.use(function (req, res) {
    res.status(404).json({"message": "url não encontrada"});
});
