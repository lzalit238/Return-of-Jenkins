const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname+'/app', '/index.html'))// calling filepath
})

//styling
app.get('/main.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/app', 'main.css'))
})

// 1. tribond puzzle (drive)
app.get('/puzzle1', (req, res) =>{
    res.status(200).send('<h3> answer: a hard bargain, trucker, cattle </h3>')
})

//2. tribond puzzle (sketch)
app.get('/drive', (req, res) => {
    res.status(200).send('<h3> answer: a comedy troop, a drawing class, a police artist </h3>')
})

// 3. tribond puzzle (angle)
app.get('/sketch', (req, res) => {
    res.status(200).send('<h3> answer: straight, obtuse, acute </h3>');
})

// 4. dictionary riddle (incorrectly)
app.get('/angle', (req, res) => {
    res.status(200).send('<h3> which word in the dictionary is spelled incorrectly? </h3>')
})

// 5. color riddle (orange)
app.get('/incorrectly', (req, res) => {
    res.status(200).send('<h3> what color can you eat </h3>')
})

// 6. lighting riddle (lightning)
app.get('/orange', (req, res) => {
    res.status(200).send('<h3> i touch the earth and i touch the sky, but if i touch you, you\'ll likely die. what am i? </h3>')
})

// final page 
app.get('/lightning', (req, res) => {
    res.status(200).send('<h3> Congrats! U r smart or smth </h3>')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

//riddles link: www.letsroam.com/explorer/word-riddles/

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen