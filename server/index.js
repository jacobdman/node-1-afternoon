var express = require('express')
var bodyParser = require('body-parser')
var mc = require('./controllers/messages_controller')

const app = express()
app.use( bodyParser.json() )


const baseUrl = "/api/messages"
app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(baseUrl + '/:id', mc.update)
app.delete(baseUrl + '/:id', mc.delete)

app.listen( 3000, () => {
    console.log('Listening on port 3000')
})
