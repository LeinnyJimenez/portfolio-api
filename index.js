const express = require('express')

const courses = require('./courses.js')

const app = express();

app.use(express.json());

app.get(',', (req, res) => {
    res.send('welcome to my portfolio api')
})

app.get("/portfolio/courses", (req, res) => {
    res.send(courses)
});


const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`listening on ${PORT}`))



