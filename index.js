const express = require('express');
const cors = require("cors");

// const courses = require('./courses.js')

const app = express();

app.use(express.json());


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const courses = [
    {
        id: 1,
        title: 'Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero',
        image: '',
        teacher: { name: 'Nicolas Shurmann', img: 'https://i.ibb.co/NVsf86W/nicolas-shurmann.jpg' },
        tecnologies: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'APIs Rest', 'MongoDB'],
        completed: true,
        certificade: 'https://i.ibb.co/LkbNgqq/Aprende-Javascript-HTML-CSS3-y-Nodejs-desde-cero-page-0001.jpg',
        duration: 19
    }
]


app.get('/', (req, res) => {
    res.send('welcome to my portfolio api')
})

app.get("/portfolio", (req, res) => {
    res.send(courses)
});

// console.log(courses);
const PORT = process.env.PORT || '5001'

app.listen(PORT, () => console.log(`listening on ${PORT}`))



