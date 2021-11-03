const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname+'/app', '/index.html'))// calling filepath
})
//  styling
app.get('/main.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/app', 'main.css'))
})
//  planets puzzle
app.get('/plutoIsNotAPlanet', (req, res) => {
    res.status(200).send('Puzzle 2')
})
//  analogy puzzle
app.get('/WestMec=BestMec', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen