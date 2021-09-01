const express = require('express')
const app = express()

//Middleware
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('signUp')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signUp', (req, res) => {
    res.render('signUp')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server listening on port ${port}...`))