const express = require('express')
const path = require('path')
const index = require('./routes/index')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

const options = {
  maxAge: 50000
}
app.use('/static', express.static(path.join(__dirname, 'assets'), options))


app.use('/', index)


app.listen(3000, () => console.log('Example app listening on port 3000!'))


