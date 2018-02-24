const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.get('/image', (req, res) => res.sendFile(path.join(__dirname, '/assets/image.png')))

app.use('/static', express.static(path.join(__dirname, 'assets')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


