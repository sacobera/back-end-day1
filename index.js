const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors());

const friends =['Rachel', 'Monica', 'Chandler', 'Hagrid', 'dumbledore', 'Dobby is a free elf']

app.get('/api/users', function(req, res){
    res.status(200).send(friends);
})

// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
})

app.listen(4000, function() {
    console.log('Server is running on port 4000')
})
