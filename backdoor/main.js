const express = require('express')
const Database = require('./db_wrappers')

const app = express()
const port = 9999


const dbfile = 'bigbucks.db'
const database = Database(dbfile).init();


app.get('/', (req, res) => {
    res.send('Hello World!')
})
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})