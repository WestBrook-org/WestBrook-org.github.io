require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDIFINED"

app.get('/zagster', (request, response) => {
    const pool = new Pool({
        connectionString: DATABASE_URL, 
    })
    pool.query('SELECT * FROM rides', (err, results) => {
        response.send(results)
        pool.end()
    })
})
app.get("/algorithms", (request,response) => response.send("derived from a mathematician's name"))

app.get('/rides/count', (request, response) => {
    const pool = new Pool({
        connectionString: DATABASE_URL, 
    })
    pool.query('SELECT COUNT * FROM rides', (err, results) => {
        response.send(results)
        pool.end()
    })
})