
const express = require('express') //import express from 'express'  //
const familia = require('./data')


const app = express()
const port = 3000; 

app.get('/familia', function (req, res) {
//   res.send('Hello World')
    res.json(familia)
})
// app.post('/', function (req, res) {
//   res.send('Hello World')
// })
// app.put('/', function (req, res) {
//   res.send('Hello World')
// })
// app.delete('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)  // en el puerto en el que escucha
app.listen(port, ()=> console.log(`El servidor está escuchando por el puerto ${port}`  ) )

// console.log("Hola Pollitos");