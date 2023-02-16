const express = require('express')

const courses = require('./courses.js')

const app = express();

app.use(express.json());

app.get("/portfolio/courses", (req, res) => {
    res.send(courses)
});


const port = process.env.port || 5000

app.listen(port, () => console.log(`listening on ${port}`))



