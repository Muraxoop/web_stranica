var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//const dbConfig = require("./db.config.js");
var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connection configurations
var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pzi"
    });

// connect to database
dbConn.connect();


app.get("/korisnik", function (request, response) {

    dbConn.query('SELECT * FROM korisnik', function (error, results, fields) {
        if (error) throw error;
        return response.send({ error: false, data: results, message: 'READ svi korisnici.' });
        });
    //return response.send({message: "CREATE" + ime + prezime});
    
})

// Retrieve useful_part with id
app.get('/korisnik/:id', function (request, response) {
    let useful_part_id = request.params.id;
    if (!useful_part_id) {
    return response.status(400).send({ error: true, message: 'Molim dajte id od korisnika' });
    }
    dbConn.query('SELECT * FROM korisnik id=?', useful_part_id, function
    (error, results, fields) {
    if (error) throw error;
    return response.send({ error: false, data: results[0], message:'Popis korisnika pod tim ID.' });
    });
    });
    
// Delete korisnik with id
app.delete('/korisnik/:id', function (request, response) {
    let korisnik_id = request.params.id;
    if (!korisnik_id) {
        return response.status(400).send({ error: true, message: 'Molim dajte korisnik_id' });
    }
    dbConn.query('DELETE FROM korisnik WHERE id = ?', korisnik_id, function (error, results, fields) {
        if (error) throw error;
        if (results.affectedRows === 0) {
            return response.send({ error: true, message: 'Korisnik nije naden.' });
        }
        return response.send({ error: false, message: 'Korisnik uspjesno izbrisan ' });
    });
});

app.post('/korisnik', function (request, response) {
    var ime = request.body.ime;
    var prezime = request.body.prezime;
    var tel = request.body.tel;
    dbConn.query('INSERT INTO korisnik VALUES (NULL, ?, ?, ?)'), [ime, prezime,tel], function (error, results, fields){
        if (error) throw error;
        return response.send ({error: false, data: results, message: 'INSERT korisnik ime='+ime});
    }
})

app.put('/korisnik', function (request, response) {
    var id = request.params.id;
    var tel = request.body.tel;
    dbConn.query('UPDATE korisnik SET tel=? WHERE id=?'), [tel, id], function (error, results, fields){
        if (error) throw error;
        return response.send ({error: false, data: results, message: 'UPDATE korisnik id='+id+' tel=' +tel });
    }
})


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
