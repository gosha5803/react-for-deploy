var express = require('express')
var path = require('path')

var PORT = 5000
var app = express()

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server's been started on ${PORT} port...`)
})