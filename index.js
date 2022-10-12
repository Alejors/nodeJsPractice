const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    let data = req.body
    res.send(`Se creó el usuario ${data.name}, que es ${data.descricion}`)
})

//MANEJAR EL USO DE PARAMS
//UN PARAMETRO
app.get('/hello/:name', (req, res) => {
    let data = req.params

    res.send(`Hola ${data.name}`)
})

//MULTIPLES PARAMETROS
app.get('/add/:x/:y', (req, res) => { //LOS PARAMS PUEDEN ESTAR SEPARADOS POR OTRAS RUTAS .../add/:x/otro/:y 
    const { x, y } = req.params

    const result = parseInt(x) + parseInt(y)

    res.send(`Resultado es: ${result}`)

})

app.get('/search', (req, res) => {
    const query = req.query.q
    if (query !== undefined && query !== ''){
        res.send(`Estás buscando ${query} `)
    }else{
        res.send('No sé qué estás buscando')
    }
})

app.listen(3000)
console.log(`Server on port ${3000}`)
