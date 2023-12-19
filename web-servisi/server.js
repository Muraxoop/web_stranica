var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connection configurations
var dbConn = mysql.createConnection({
    host: "student.veleri.hr",
    port: 3306,
    user: "khoblajpa",
    password: "11",
    database: "Inventar"
});

// Connect to the database
dbConn.connect();

// Prikaz svih automobila u inventaru
app.get("/inventar", function (request, response) {
    dbConn.query('SELECT * FROM Inventar', function (error, results, fields) {
        if (error) throw error;
        return response.send({ error: false, data: results, message: 'Popis svih automobila u inventaru.' });
    });
});

// Prikaz informacija o automobilu prema ID-u
app.get('/inventar/:id', function (request, response) {
    let vozilo_id = request.params.id;
    if (!vozilo_id) {
        return response.status(400).send({ error: true, message: 'Molim dajte ID automobila' });
    }
    dbConn.query('SELECT * FROM Inventar WHERE VoziloID=?', vozilo_id, function (error, results, fields) {
        if (error) throw error;
        return response.send({ error: false, data: results[0], message: 'Podaci o automobilu s ID-om ' + vozilo_id });
    });
});

// Brisanje automobila iz inventara prema ID-u
app.delete('/inventar/:id', function (request, response) {
    let vozilo_id = request.params.id;
    if (!vozilo_id) {
        return response.status(400).send({ error: true, message: 'Molim dajte ID automobila' });
    }
    dbConn.query('DELETE FROM Inventar WHERE VoziloID = ?', vozilo_id, function (error, results, fields) {
        if (error) throw error;
        if (results.affectedRows === 0) {
            return response.send({ error: true, message: 'Automobil nije pronađen.' });
        }
        return response.send({ error: false, message: 'Automobil uspješno izbrisan.' });
    });
});

// Dodavanje novog automobila u inventar
app.post('/inventar', function (request, response) {
    var proizvodac = request.body.proizvodac;
    var model = request.body.model;
    var godinaProizvodnje = request.body.godinaProizvodnje;

    dbConn.query('INSERT INTO Inventar (Proizvodac, Model, GodinaProizvodnje) VALUES (?, ?, ?)',
        [proizvodac, model, godinaProizvodnje], function (error, results, fields) {
            if (error) throw error;
            return response.send({ error: false, data: results, message: 'Dodan novi automobil: ' + proizvodac + ' ' + model });
        });
});

// Ažuriranje informacija o automobilu u inventaru prema ID-u
app.put('/inventar/:id', function (request, response) {
    var vozilo_id = request.params.id;
    var proizvodac = request.body.proizvodac;
    var model = request.body.model;
    var godinaProizvodnje = request.body.godinaProizvodnje;

    dbConn.query('UPDATE Inventar SET Proizvodac=?, Model=?, GodinaProizvodnje=? WHERE VoziloID=?',
        [proizvodac, model, godinaProizvodnje, vozilo_id], function (error, results, fields) {
            if (error) throw error;
            return response.send({ error: false, data: results, message: 'Ažuriran automobil s ID-om ' + vozilo_id });
        });
});

// Postavljanje porta
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
