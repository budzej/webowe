//importy i deklaracje
const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const exp = require('constants');


//tworzenie instancji Expressa
const app = express();
app.use(cors());
app.use(bodyParser.json());

//konfiguracja Postgresqla
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pojazdy',
    password: 'postgres',
    port: 5432
});

//tworzenie tabeli pojazdów

pool.query(
    `CREATE TABLE IF NOT EXISTS pojazdy(
    id SERIAL PRIMARY KEY,
    marka VARCHAR(30),
    model VARCHAR(30),
    numer_rejestracyjny VARCHAR(10),
    wlasciciel VARCHAR(100),
    email VARCHAR(128));`
);

//pobieranie
app.get('/pojazdy',async(req,res)=>{
const {rows} = await pool.query('SELECT * FROM pojazdy');
res.json(rows);
});

//wstawianie
app.post('/pojazdy',async (req,res) => {
    const { marka, model, numer_rejestracyjny, wlasciciel, email} = req.body;
    await pool.query(`INSERT INTO pojazdy (marka,model,numer_rejestracyjny, wlasciciel, email)
                    VALUES ($1, $2, $3, $4, $5);`, [marka, model, numer_rejestracyjny, wlasciciel, email]);
    res.status(201).send("Dodano pojazd.");
});

//uruchamianie serwera
app.listen(3000, () =>{
    console.log("Serwer działa na http://localhost:3000");
});
