const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    let data = req.body
    res.send(`Se creó el usuario ${data.name}, que es ${data.descricion}`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
